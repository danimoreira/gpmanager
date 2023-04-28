
import * as moment from 'moment';

export class Company {
    id: number;
    name: string;
    email: string;
    phoneContact: string;
    address: {
        street: string;
        number: string;
        complement: string;
        district: string;
        city: string;
        state: string;
        zipCode: string
    } | undefined;
    isActive: boolean;
    lastModificationTime: moment.Moment | undefined;
    creationTime: moment.Moment;
    lastModifierUserId: number;
    creatorUserId: number;

    items: Company[] | undefined;
    totalCount: number;

    constructor(data?: Company) {
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
            this.email = _data["email"];
            this.phoneContact = _data["phoneContact"];
            this.address = _data["address"];
            this.isActive = _data["isActive"];
            this.lastModifierUserId = _data["lastModifierUserId"];
            this.creatorUserId = _data["creatorUserId"];
            this.lastModificationTime = _data["lastModificationTime"] ? moment(_data["lastModificationTime"].toString()) : <any>undefined;
            this.creationTime = _data["creationTime"] ? moment(_data["creationTime"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): Company {
        data = typeof data === 'object' ? data : {};
        let result = new Company();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["email"] = this.email;
        data["phoneContact"] = this.phoneContact;
        data["address"] = this.address;
        data["creatorUserId"] = this.creatorUserId;
        data["isActive"] = this.isActive;
        data["lastModificationTime"] = this.lastModificationTime ? this.lastModificationTime.toISOString() : <any>undefined;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : <any>undefined;
        return data;
    }

    clone(): Company {
        const json = this.toJSON();
        let result = new Company();
        result.init(json);
        return result;
    }
}

export class CompanyPagedResultDto {
    items: Company[] | undefined;
    totalCount: number;

    constructor(data?: CompanyPagedResultDto) {
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
                    this.items.push(Company.fromJS(item));
            }
            this.totalCount = _data["totalCount"];
        }
    }

    static fromJS(data: any): CompanyPagedResultDto {
        data = typeof data === 'object' ? data : {};
        let result = new CompanyPagedResultDto();
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

    clone(): CompanyPagedResultDto {
        const json = this.toJSON();
        let result = new CompanyPagedResultDto();
        result.init(json);
        return result;
    }
}

export interface ICreateCompanyDto {
    name: string;
    email: string;
    phoneContact: string;
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
}

export class CreateCompanyDto implements ICreateCompanyDto{
    name: string;
    email: string;
    phoneContact: string;
    address: {
        street: string;
        number: string;
        complement: string;
        district: string;
        city: string;
        state: string;
        zipCode: string;
    } | undefined;
    isActive: boolean;

    constructor(data?: ICreateCompanyDto) {
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
            this.email = _data["email"];
            this.phoneContact = _data["phoneContact"];
            this.address.street = _data["address"].street;
            this.address.number = _data["address"].number;
            this.address.complement = _data["address"].complement;
            this.address.district = _data["address"].district;
            this.address.city = _data["address"].city;
            this.address.state = _data["address"].state;
            this.address.zipCode = _data["address"].zipCode;
        }
    }

    static fromJS(data: any): CreateCompanyDto {
        data = typeof data === 'object' ? data : {};
        let result = new CreateCompanyDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["email"] = this.email;
        data["phoneContact"] = this.phoneContact;
        data["address"] = this.address;
        return data;
    }

    clone(): CreateCompanyDto {
        const json = this.toJSON();
        let result = new CreateCompanyDto();
        result.init(json);
        return result;
    }
}
