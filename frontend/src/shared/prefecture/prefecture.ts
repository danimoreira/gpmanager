
import * as moment from 'moment';

export class Prefecture {
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
    cnpj:string;

    isActive: boolean;
    lastModificationTime: moment.Moment | undefined;
    creationTime: moment.Moment;
    lastModifierUserId: number;
    creatorUserId: number;

    items: Prefecture[] | undefined;
    totalCount: number;

    constructor(data?: Prefecture) {
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
            this.cnpj = _data["cnpj"];

            this.isActive = _data["isActive"];
            this.lastModifierUserId = _data["lastModifierUserId"];
            this.creatorUserId = _data["creatorUserId"];
            this.lastModificationTime = _data["lastModificationTime"] ? moment(_data["lastModificationTime"].toString()) : <any>undefined;
            this.creationTime = _data["creationTime"] ? moment(_data["creationTime"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): Prefecture {
        data = typeof data === 'object' ? data : {};
        let result = new Prefecture();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["idInternal"] = this.idInternal;
        data["address"] = this.address;
        data["cnpj"] = this.cnpj;

        data["creatorUserId"] = this.creatorUserId;
        data["isActive"] = this.isActive;
        data["lastModificationTime"] = this.lastModificationTime ? this.lastModificationTime.toISOString() : <any>undefined;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : <any>undefined;
        return data;
    }

    clone(): Prefecture {
        const json = this.toJSON();
        let result = new Prefecture();
        result.init(json);
        return result;
    }
}

export class PrefecturePagedResultDto {
    items: Prefecture[] | undefined;
    totalCount: number;

    constructor(data?: PrefecturePagedResultDto) {
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
                    this.items.push(Prefecture.fromJS(item));
            }
            this.totalCount = _data["totalCount"];
        }
    }

    static fromJS(data: any): PrefecturePagedResultDto {
        data = typeof data === 'object' ? data : {};
        let result = new PrefecturePagedResultDto();
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

    clone(): PrefecturePagedResultDto {
        const json = this.toJSON();
        let result = new PrefecturePagedResultDto();
        result.init(json);
        return result;
    }
}

export interface ICreatePrefectureDto {
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
    cnpj: string;
}

export class CreatePrefectureDto implements ICreatePrefectureDto{
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
    cnpj: string;

    constructor(data?: ICreatePrefectureDto) {
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
            this.address.street = _data["address"].street;
            this.address.number = _data["address"].number;
            this.address.complement = _data["address"].complement;
            this.address.district = _data["address"].district;
            this.address.city = _data["address"].city;
            this.address.state = _data["address"].state;
            this.address.zipCode = _data["address"].zipCode;
            this.cnpj = _data["cnpj"];

        }
    }

    static fromJS(data: any): CreatePrefectureDto {
        data = typeof data === 'object' ? data : {};
        let result = new CreatePrefectureDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["idInternal"] = this.idInternal;
        data["address"] = this.address;
        data["cnpj"] = this.cnpj;
        return data;
    }

    clone(): CreatePrefectureDto {
        const json = this.toJSON();
        let result = new CreatePrefectureDto();
        result.init(json);
        return result;
    }
}
