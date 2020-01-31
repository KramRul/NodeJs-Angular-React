export class LocalStorageService {
    public set(key: string, data: any): void {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        }
        catch (error) {
            throw Error(error);
        }
    }

    public get<T>(key: string): T {
        try {
            let item = localStorage.getItem(key);
            if(!item){
                return {} as T;
            }
            return JSON.parse(item) as T;
        }
        catch (error) {
            throw Error(error);
        }
    }

    public remove(key: string) {
        try {
            localStorage.removeItem(key);
        }
        catch (error) {
            throw Error(error);
        }
    }

    public clear() {
        try {
            localStorage.clear();
        }
        catch (error) {
            throw Error(error);
        }
    }

}