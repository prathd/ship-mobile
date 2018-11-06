import { ApolloLink, Observable } from 'apollo-link';

import { getToken, refreshToken } from '../../data/services/auth';

export class AuthLink extends ApolloLink {
	injectClient = client => {
		this.client = client;
	};

	refreshToken = () => {
		if (!this.tokenRefreshingPromise) this.tokenRefreshingPromise = refreshToken(this.client);
		return this.tokenRefreshingPromise;
	};

	setTokenHeader = async operation => {
    const token = await getToken();
		if (token) operation.setContext({ headers: { authorization: `Bearer ${token}` } });
	};

	request (operation, forward) {
		// set token in header
    this.setTokenHeader(operation);

		// try refreshing token once if it has expired
		return new Observable(observer => {
			let subscription, innerSubscription;
			try {
				subscription = forward(operation).subscribe({
					next: observer.next.bind(observer),
					complete: observer.complete.bind(observer),
					error: networkError => {
						if (networkError.statusCode === 401) {
							this.refreshToken().then(success => {
								if (success) {
									// set new token and retry operation
									this.setTokenHeader(operation);
									innerSubscription = forward(operation).subscribe(observer);
								} else {
									// throw error
									observer.error(new Error('JWT Refresh Failed'));
								}
							});
						} else {
							observer.error(networkError);
						}
					},
				});
			} catch (e) {
				observer.error(e);
			}
			return () => {
				if (subscription) subscription.unsubscribe();
				if (innerSubscription) innerSubscription.unsubscribe();
			};
		});
	}
}
