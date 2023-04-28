
import * as moment from 'moment';

export class TypeAllocation {
    id: number;
    description: string;
    isActive: boolean;
    lastModificationTime: moment.Moment | undefined;
    creationTime: moment.Moment;
    lastModifierUserId: number;
    creatorUserId: number;

    items: TypeAllocation[] | undefined;
    totalCount: number;

    constructor(data?: TypeAllocation) {
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
            this.description = _data["description"];
            this.isActive = _data["isActive"];
            this.lastModifierUserId = _data["lastModifierUserId"];
            this.creatorUserId = _data["creatorUserId"];
            this.lastModificationTime = _data["lastModificationTime"] ? moment(_data["lastModificationTime"].toString()) : <any>undefined;
            this.creationTime = _data["creationTime"] ? moment(_data["creationTime"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): TypeAllocation {
        data = typeof data === 'object' ? data : {};
        let result = new TypeAllocation();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["description"] = this.description;
        data["lastModifierUserId"] = this.lastModifierUserId;
        data["creatorUserId"] = this.creatorUserId;
        data["isActive"] = this.isActive;
        data["lastModificationTime"] = this.lastModificationTime ? this.lastModificationTime.toISOString() : <any>undefined;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : <any>undefined;
        return data;
    }

    clone(): TypeAllocation {
        const json = this.toJSON();
        let result = new TypeAllocation();
        result.init(json);
        return result;
    }
}

export class TypeAllocationPagedResultDto {
    items: TypeAllocation[] | undefined;
    totalCount: number;

    constructor(data?: TypeAllocationPagedResultDto) {
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
                    this.items.push(TypeAllocation.fromJS(item));
            }
            this.totalCount = _data["totalCount"];
        }
    }

    static fromJS(data: any): TypeAllocationPagedResultDto {
        data = typeof data === 'object' ? data : {};
        let result = new TypeAllocationPagedResultDto();
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

    clone(): TypeAllocationPagedResultDto {
        const json = this.toJSON();
        let result = new TypeAllocationPagedResultDto();
        result.init(json);
        return result;
    }
}

export class CreateTypeAllocationDto {
    description: string;

    constructor(data?: CreateTypeAllocationDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.description = _data["description"];
        }
    }

    static fromJS(data: any): CreateTypeAllocationDto {
        data = typeof data === 'object' ? data : {};
        let result = new CreateTypeAllocationDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["description"] = this.description;
        return data;
    }

    clone(): CreateTypeAllocationDto {
        const json = this.toJSON();
        let result = new CreateTypeAllocationDto();
        result.init(json);
        return result;
    }
}
