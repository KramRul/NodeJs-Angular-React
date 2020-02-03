export default class HttpHelper {
    async get<T>(
        path: string,
        args: RequestInit = { method: "get" }
    ): Promise<HttpResponse<T>> {
        return await this.http<T>(new Request(path, args));
    };

    async post<T>(
        path: string,
        body: any,
        args: RequestInit = { method: "post", body: JSON.stringify(body) }
    ): Promise<HttpResponse<T>> {
        return await this.http<T>(new Request(path, args));
    };

    async put<T>(
        path: string,
        body: any,
        args: RequestInit = { method: "put", body: JSON.stringify(body) }
    ): Promise<HttpResponse<T>> {
        return await this.http<T>(new Request(path, args));
    };

    async http<T>(
        request: RequestInfo
    ): Promise<HttpResponse<T>> {
        const response: HttpResponse<T> = await fetch(
            request
        );
        try {
            response.parsedBody = await response.json();
        } catch (ex) { }
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response;
    }
}

export interface HttpResponse<T> extends Response {
    parsedBody?: T;
}