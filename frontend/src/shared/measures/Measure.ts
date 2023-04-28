
import * as moment from 'moment';

export class Measure {
    id: number;
    description: string;
    isActive: boolean;
    lastModificationTime: moment.Moment | undefined;
    creationTime: moment.Moment;
    lastModifierUserId: number;
    creatorUserId: number;

    items: Measure[] | undefined;
    totalCount: number;

    constructor(data?: Measure) {
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

    static fromJS(data: any): Measure {
        data = typeof data === 'object' ? data : {};
        let result = new Measure();
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

    clone(): Measure {
        const json = this.toJSON();
        let result = new Measure();
        result.init(json);
        return result;
    }
}

export class MeasurePagedResultDto {
    items: Measure[] | undefined;
    totalCount: number;

    constructor(data?: MeasurePagedResultDto) {
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
                    this.items.push(Measure.fromJS(item));
            }
            this.totalCount = _data["totalCount"];
        }
    }

    static fromJS(data: any): MeasurePagedResultDto {
        data = typeof data === 'object' ? data : {};
        let result = new MeasurePagedResultDto();
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

    clone(): MeasurePagedResultDto {
        const json = this.toJSON();
        let result = new MeasurePagedResultDto();
        result.init(json);
        return result;
    }
}

export class CreateMeasureDto {
    description: string;

    constructor(data?: CreateMeasureDto) {
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

    static fromJS(data: any): CreateMeasureDto {
        data = typeof data === 'object' ? data : {};
        let result = new CreateMeasureDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["description"] = this.description;
        return data;
    }

    clone(): CreateMeasureDto {
        const json = this.toJSON();
        let result = new CreateMeasureDto();
        result.init(json);
        return result;
    }
}
