/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * HastaTakipBack
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */

import * as url from "url";
import * as isomorphicFetch from "isomorphic-fetch";
import { Configuration } from "./configuration";

const BASE_PATH = "/".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration!: Configuration;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = isomorphicFetch) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name = "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * 
 * @export
 * @interface GetServerFormResult
 */
export interface GetServerFormResult {
    /**
     * 
     * @type {string}
     * @memberof GetServerFormResult
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof GetServerFormResult
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof GetServerFormResult
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof GetServerFormResult
     */
    tip?: string;
    /**
     * 
     * @type {number}
     * @memberof GetServerFormResult
     */
    price?: number;
    /**
     * 
     * @type {string}
     * @memberof GetServerFormResult
     */
    date?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetServerFormResult
     */
    status?: boolean;
}
/**
 * 
 * @export
 * @interface GetServerFormsResult
 */
export interface GetServerFormsResult {
    /**
     * 
     * @type {string}
     * @memberof GetServerFormsResult
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof GetServerFormsResult
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof GetServerFormsResult
     */
    title?: string;
}
/**
 * 
 * @export
 * @interface GetServerListResult
 */
export interface GetServerListResult {
    /**
     * 
     * @type {string}
     * @memberof GetServerListResult
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof GetServerListResult
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof GetServerListResult
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof GetServerListResult
     */
    tip?: string;
    /**
     * 
     * @type {string}
     * @memberof GetServerListResult
     */
    price?: string;
    /**
     * 
     * @type {string}
     * @memberof GetServerListResult
     */
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof GetServerListResult
     */
    costType?: string;
}
/**
 * 
 * @export
 * @interface GetServerLocationResult
 */
export interface GetServerLocationResult {
    /**
     * 
     * @type {string}
     * @memberof GetServerLocationResult
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof GetServerLocationResult
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof GetServerLocationResult
     */
    title?: string;
}
/**
 * 
 * @export
 * @interface GetServerUserRequest
 */
export interface GetServerUserRequest {
    /**
     * 
     * @type {string}
     * @memberof GetServerUserRequest
     */
    id?: string;
}
/**
 * 
 * @export
 * @interface GetServerUserResult
 */
export interface GetServerUserResult {
    /**
     * 
     * @type {string}
     * @memberof GetServerUserResult
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof GetServerUserResult
     */
    fullName?: string;
    /**
     * 
     * @type {string}
     * @memberof GetServerUserResult
     */
    role?: string;
    /**
     * 
     * @type {string}
     * @memberof GetServerUserResult
     */
    initial?: string;
}
/**
 * 
 * @export
 * @interface Project
 */
export interface Project {
    /**
     * 
     * @type {number}
     * @memberof Project
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    title?: string;
}
/**
 * 
 * @export
 * @interface ProjectRequest
 */
export interface ProjectRequest {
    /**
     * 
     * @type {string}
     * @memberof ProjectRequest
     */
    userId?: string;
}
/**
 * FormFunctionsApi - fetch parameter creator
 * @export
 */
export const FormFunctionsApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {GetServerFormResult} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerForm(body: GetServerFormResult, options: any = {}): FetchArgs {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body was null or undefined when calling getServerForm.');
            }
            const localVarPath = `/v1/getServerForm`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            localVarUrlObj.search = null;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"GetServerFormResult" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FormFunctionsApi - functional programming interface
 * @export
 */
export const FormFunctionsApiFp = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {GetServerFormResult} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerForm(body: GetServerFormResult, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<GetServerFormResult> {
            const localVarFetchArgs = FormFunctionsApiFetchParamCreator(configuration).getServerForm(body, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * FormFunctionsApi - factory interface
 * @export
 */
export const FormFunctionsApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @param {GetServerFormResult} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerForm(body: GetServerFormResult, options?: any) {
            return FormFunctionsApiFp(configuration).getServerForm(body, options)(fetch, basePath);
        },
    };
};

/**
 * FormFunctionsApi - object-oriented interface
 * @export
 * @class FormFunctionsApi
 * @extends {BaseAPI}
 */
export class FormFunctionsApi extends BaseAPI {
    /**
     * 
     * @param {GetServerFormResult} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FormFunctionsApi
     */
    public getServerForm(body: GetServerFormResult, options?: any) {
        return FormFunctionsApiFp(this.configuration).getServerForm(body, options)(this.fetch, this.basePath);
    }

}
/**
 * FormsFunctionsApi - fetch parameter creator
 * @export
 */
export const FormsFunctionsApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {GetServerFormsResult} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerForms(body: GetServerFormsResult, options: any = {}): FetchArgs {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body was null or undefined when calling getServerForms.');
            }
            const localVarPath = `/v1/getServerForms`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            localVarUrlObj.search = null;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"GetServerFormsResult" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FormsFunctionsApi - functional programming interface
 * @export
 */
export const FormsFunctionsApiFp = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {GetServerFormsResult} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerForms(body: GetServerFormsResult, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<GetServerFormsResult> {
            const localVarFetchArgs = FormsFunctionsApiFetchParamCreator(configuration).getServerForms(body, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * FormsFunctionsApi - factory interface
 * @export
 */
export const FormsFunctionsApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @param {GetServerFormsResult} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerForms(body: GetServerFormsResult, options?: any) {
            return FormsFunctionsApiFp(configuration).getServerForms(body, options)(fetch, basePath);
        },
    };
};

/**
 * FormsFunctionsApi - object-oriented interface
 * @export
 * @class FormsFunctionsApi
 * @extends {BaseAPI}
 */
export class FormsFunctionsApi extends BaseAPI {
    /**
     * 
     * @param {GetServerFormsResult} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FormsFunctionsApi
     */
    public getServerForms(body: GetServerFormsResult, options?: any) {
        return FormsFunctionsApiFp(this.configuration).getServerForms(body, options)(this.fetch, this.basePath);
    }

}
/**
 * HastaTakipBackApi - fetch parameter creator
 * @export
 */
export const HastaTakipBackApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1GetServerUserXGet(options: any = {}): FetchArgs {
            const localVarPath = `/v1/getServerUserX`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            localVarUrlObj.search = null;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * HastaTakipBackApi - functional programming interface
 * @export
 */
export const HastaTakipBackApiFp = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1GetServerUserXGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string> {
            const localVarFetchArgs = HastaTakipBackApiFetchParamCreator(configuration).v1GetServerUserXGet(options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * HastaTakipBackApi - factory interface
 * @export
 */
export const HastaTakipBackApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1GetServerUserXGet(options?: any) {
            return HastaTakipBackApiFp(configuration).v1GetServerUserXGet(options)(fetch, basePath);
        },
    };
};

/**
 * HastaTakipBackApi - object-oriented interface
 * @export
 * @class HastaTakipBackApi
 * @extends {BaseAPI}
 */
export class HastaTakipBackApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HastaTakipBackApi
     */
    public v1GetServerUserXGet(options?: any) {
        return HastaTakipBackApiFp(this.configuration).v1GetServerUserXGet(options)(this.fetch, this.basePath);
    }

}
/**
 * ListFunctionsApi - fetch parameter creator
 * @export
 */
export const ListFunctionsApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {GetServerListResult} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerList(body: GetServerListResult, options: any = {}): FetchArgs {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body was null or undefined when calling getServerList.');
            }
            const localVarPath = `/v1/getServerList`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            localVarUrlObj.search = null;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"GetServerListResult" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ListFunctionsApi - functional programming interface
 * @export
 */
export const ListFunctionsApiFp = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {GetServerListResult} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerList(body: GetServerListResult, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<GetServerListResult> {
            const localVarFetchArgs = ListFunctionsApiFetchParamCreator(configuration).getServerList(body, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * ListFunctionsApi - factory interface
 * @export
 */
export const ListFunctionsApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @param {GetServerListResult} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerList(body: GetServerListResult, options?: any) {
            return ListFunctionsApiFp(configuration).getServerList(body, options)(fetch, basePath);
        },
    };
};

/**
 * ListFunctionsApi - object-oriented interface
 * @export
 * @class ListFunctionsApi
 * @extends {BaseAPI}
 */
export class ListFunctionsApi extends BaseAPI {
    /**
     * 
     * @param {GetServerListResult} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListFunctionsApi
     */
    public getServerList(body: GetServerListResult, options?: any) {
        return ListFunctionsApiFp(this.configuration).getServerList(body, options)(this.fetch, this.basePath);
    }

}
/**
 * LocationFunctionsApi - fetch parameter creator
 * @export
 */
export const LocationFunctionsApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {GetServerLocationResult} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerLocation(body: GetServerLocationResult, options: any = {}): FetchArgs {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body was null or undefined when calling getServerLocation.');
            }
            const localVarPath = `/v1/getServerLocation`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            localVarUrlObj.search = null;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"GetServerLocationResult" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LocationFunctionsApi - functional programming interface
 * @export
 */
export const LocationFunctionsApiFp = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {GetServerLocationResult} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerLocation(body: GetServerLocationResult, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<GetServerLocationResult> {
            const localVarFetchArgs = LocationFunctionsApiFetchParamCreator(configuration).getServerLocation(body, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * LocationFunctionsApi - factory interface
 * @export
 */
export const LocationFunctionsApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @param {GetServerLocationResult} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerLocation(body: GetServerLocationResult, options?: any) {
            return LocationFunctionsApiFp(configuration).getServerLocation(body, options)(fetch, basePath);
        },
    };
};

/**
 * LocationFunctionsApi - object-oriented interface
 * @export
 * @class LocationFunctionsApi
 * @extends {BaseAPI}
 */
export class LocationFunctionsApi extends BaseAPI {
    /**
     * 
     * @param {GetServerLocationResult} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationFunctionsApi
     */
    public getServerLocation(body: GetServerLocationResult, options?: any) {
        return LocationFunctionsApiFp(this.configuration).getServerLocation(body, options)(this.fetch, this.basePath);
    }

}
/**
 * ProjectFunctionsApi - fetch parameter creator
 * @export
 */
export const ProjectFunctionsApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {ProjectRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerProject(body: ProjectRequest, options: any = {}): FetchArgs {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body was null or undefined when calling getServerProject.');
            }
            const localVarPath = `/v1/getServerProject`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            localVarUrlObj.search = null;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"ProjectRequest" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProjectFunctionsApi - functional programming interface
 * @export
 */
export const ProjectFunctionsApiFp = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {ProjectRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerProject(body: ProjectRequest, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<Project>> {
            const localVarFetchArgs = ProjectFunctionsApiFetchParamCreator(configuration).getServerProject(body, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * ProjectFunctionsApi - factory interface
 * @export
 */
export const ProjectFunctionsApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @param {ProjectRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerProject(body: ProjectRequest, options?: any) {
            return ProjectFunctionsApiFp(configuration).getServerProject(body, options)(fetch, basePath);
        },
    };
};

/**
 * ProjectFunctionsApi - object-oriented interface
 * @export
 * @class ProjectFunctionsApi
 * @extends {BaseAPI}
 */
export class ProjectFunctionsApi extends BaseAPI {
    /**
     * 
     * @param {ProjectRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectFunctionsApi
     */
    public getServerProject(body: ProjectRequest, options?: any) {
        return ProjectFunctionsApiFp(this.configuration).getServerProject(body, options)(this.fetch, this.basePath);
    }

}
/**
 * UserFunctionsApi - fetch parameter creator
 * @export
 */
export const UserFunctionsApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {GetServerUserRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerUser(body: GetServerUserRequest, options: any = {}): FetchArgs {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body was null or undefined when calling getServerUser.');
            }
            const localVarPath = `/v1/getServerUser`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            localVarUrlObj.search = null;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"GetServerUserRequest" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserFunctionsApi - functional programming interface
 * @export
 */
export const UserFunctionsApiFp = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {GetServerUserRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerUser(body: GetServerUserRequest, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<GetServerUserResult> {
            const localVarFetchArgs = UserFunctionsApiFetchParamCreator(configuration).getServerUser(body, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * UserFunctionsApi - factory interface
 * @export
 */
export const UserFunctionsApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @param {GetServerUserRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getServerUser(body: GetServerUserRequest, options?: any) {
            return UserFunctionsApiFp(configuration).getServerUser(body, options)(fetch, basePath);
        },
    };
};

/**
 * UserFunctionsApi - object-oriented interface
 * @export
 * @class UserFunctionsApi
 * @extends {BaseAPI}
 */
export class UserFunctionsApi extends BaseAPI {
    /**
     * 
     * @param {GetServerUserRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserFunctionsApi
     */
    public getServerUser(body: GetServerUserRequest, options?: any) {
        return UserFunctionsApiFp(this.configuration).getServerUser(body, options)(this.fetch, this.basePath);
    }

}
