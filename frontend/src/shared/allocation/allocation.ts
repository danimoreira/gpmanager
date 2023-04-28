
import * as moment from 'moment';

export class Allocation {
    id: number;
    name: string;
    idInternal: number;
    address: {
        street: string;
        number: string;
        complement: string;
        district: string;
        city: string;
        state: string;
        zipCode: string
    } | undefined;
    initialTimeOperation:string;
    finalTimeOperation: string;
    typeAllocationId: number;
    prefectureId: number;

    isActive: boolean;
    lastModificationTime: moment.Moment | undefined;
    creationTime: moment.Moment;
    lastModifierUserId: number;
    creatorUserId: number;

    items: Allocation[] | undefined;
    totalCount: number;

    constructor(data?: Allocation) {
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
            this.idInternal = _data["idInternal"];
            this.address = _data["address"];
            this.initialTimeOperation = _data["initialTimeOperation"];
            this.finalTimeOperation = _data["finalTimeOperation"];
            this.typeAllocationId = _data["typeAllocationId"];
            this.prefectureId = _data["prefectureId"];

            this.isActive = _data["isActive"];
            this.lastModifierUserId = _data["lastModifierUserId"];
            this.creatorUserId = _data["creatorUserId"];
            this.lastModificationTime = _data["lastModificationTime"] ? moment(_data["lastModificationTime"].toString()) : <any>undefined;
            this.creationTime = _data["creationTime"] ? moment(_data["creationTime"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): Allocation {
        data = typeof data === 'object' ? data : {};
        let result = new Allocation();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["idInternal"] = this.idInternal;
        data["address"] = this.address;
        data["initialTimeOperation"] = this.initialTimeOperation;
        data["finalTimeOperation"] = this.finalTimeOperation;
        data["typeAllocationId"] = this.typeAllocationId;
        data["prefectureId"] = this.prefectureId;

        data["creatorUserId"] = this.creatorUserId;
        data["isActive"] = this.isActive;
        data["lastModificationTime"] = this.lastModificationTime ? this.lastModificationTime.toISOString() : <any>undefined;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : <any>undefined;
        return data;
    }

    clone(): Allocation {
        const json = this.toJSON();
        let result = new Allocation();
        result.init(json);
        return result;
    }
}

export class AllocationPagedResultDto {
    items: Allocation[] | undefined;
    totalCount: number;

    constructor(data?: AllocationPagedResultDto) {
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
                    this.items.push(Allocation.fromJS(item));
            }
            this.totalCount = _data["totalCount"];
        }
    }

    static fromJS(data: any): AllocationPagedResultDto {
        data = typeof data === 'object' ? data : {};
        let result = new AllocationPagedResultDto();
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

    clone(): AllocationPagedResultDto {
        const json = this.toJSON();
        let result = new AllocationPagedResultDto();
        result.init(json);
        return result;
    }
}

export interface ICreateAllocationDto {
    name: string;
    idInternal: string;
    address: {
        street: string;
        number: string;
        complement: string;
        district: string;
        city: string;
        state: string;
        zipCode: string
    };
    isActive: boolean;
    initialTimeOperation:string;
    finalTimeOperation: string;
    typeAllocationId: number;
    prefectureId: number;
}

export class CreateAllocationDto implements ICreateAllocationDto{
    name: string;
    idInternal: string;
    address: {
        street: string;
        number: string;
        complement: string;
        district: string;
        city: string;
        state: string;
        zipCode: string;
    };
    isActive: boolean;
    initialTimeOperation:string;
    finalTimeOperation: string;
    typeAllocationId: number;
    prefectureId: number;

    constructor(data?: ICreateAllocationDto) {
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
            this.idInternal = _data["idInternal"];
            // this.address.street = _data["address"].street;
            // this.address.number = _data["address"].number;
            // this.address.complement = _data["address"].complement;
            // this.address.district = _data["address"].district;
            // this.address.city = _data["address"].city;
            // this.address.state = _data["address"].state;
            // this.address.zipCode = _data["address"].zipCode;
            this.address = _data["address"];
            this.initialTimeOperation = _data["initialTimeOperation"];
            this.finalTimeOperation = _data["finalTimeOperation"];
            this.typeAllocationId = _data["typeAllocationId"];
            this.prefectureId = _data["prefectureId"];

        }
    }

    static fromJS(data: any): CreateAllocationDto {
        data = typeof data === 'object' ? data : {};
        let result = new CreateAllocationDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["idInternal"] = this.idInternal;
        data["address"] = this.address;
        data["initialTimeOperation"] = this.initialTimeOperation;
        data["finalTimeOperation"] = this.finalTimeOperation;
        data["typeAllocationId"] = this.typeAllocationId;
        data["prefectureId"] = this.prefectureId;
        return data;
    }

    clone(): CreateAllocationDto {
        const json = this.toJSON();
        let result = new CreateAllocationDto();
        result.init(json);
        return result;
    }
}
