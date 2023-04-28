
import * as moment from 'moment';

export class Worker {
    id: number;
    name: string;
    phoneNumber: string;
    isActive: boolean;
    lastModificationTime: moment.Moment | undefined;
    creationTime: moment.Moment;
    lastModifierUserId: number;
    creatorUserId: number;

    items: Worker[] | undefined;
    totalCount: number;

    constructor(data?: Worker) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
            this.phoneNumber = _data["phoneNumber"];
            this.isActive = _data["isActive"];
            this.lastModifierUserId = _data["lastModifierUserId"];
            this.creatorUserId = _data["creatorUserId"];
            this.lastModificationTime = _data["lastModificationTime"] ? moment(_data["lastModificationTime"].toString()) : <any>undefined;
            this.creationTime = _data["creationTime"] ? moment(_data["creationTime"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): Worker {
        data = typeof data === 'object' ? data : {};
        let result = new Worker();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["phoneNumber"] = this.phoneNumber;
        data["lastModifierUserId"] = this.lastModifierUserId;
        data["creatorUserId"] = this.creatorUserId;
        data["isActive"] = this.isActive;
        data["lastModificationTime"] = this.lastModificationTime ? this.lastModificationTime.toISOString() : <any>undefined;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : <any>undefined;
        return data;
    }

    clone(): Worker {
        const json = this.toJSON();
        let result = new Worker();
        result.init(json);
        return result;
    }
}

export class WorkerPagedResultDto {
    items: Worker[] | undefined;
    totalCount: number;

    constructor(data?: WorkerPagedResultDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["items"])) {
                this.items = [] as any;
                for (let item of _data["items"])
                    this.items.push(Worker.fromJS(item));
            }
            this.totalCount = _data["totalCount"];
        }
    }

    static fromJS(data: any): WorkerPagedResultDto {
        data = typeof data === 'object' ? data : {};
        let result = new WorkerPagedResultDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        data["totalCount"] = this.totalCount;
        return data;
    }

    clone(): WorkerPagedResultDto {
        const json = this.toJSON();
        let result = new WorkerPagedResultDto();
        result.init(json);
        return result;
    }
}

export class CreateWorkerDto {
    name: string;
    phoneNumber: string;

    constructor(data?: CreateWorkerDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.name = _data["name"];
            this.phoneNumber = _data["phoneNumber"];
        }
    }

    static fromJS(data: any): CreateWorkerDto {
        data = typeof data === 'object' ? data : {};
        let result = new CreateWorkerDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["phoneNumber"] = this.phoneNumber;
        return data;
    }

    clone(): CreateWorkerDto {
        const json = this.toJSON();
        let result = new CreateWorkerDto();
        result.init(json);
        return result;
    }
}
