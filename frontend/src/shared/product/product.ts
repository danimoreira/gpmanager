
import * as moment from 'moment';

export class Product {
    id: number;
    description: string;
    categoryProductId: number;
    measureMainId: number;
    closedMeasureId: number;
    quantityClosedMeasure: number;
    isActive: boolean;
    lastModificationTime: moment.Moment | undefined;
    creationTime: moment.Moment;
    lastModifierUserId: number;
    creatorUserId: number;

    items: Product[] | undefined;
    totalCount: number;

    constructor(data?: Product) {
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
            this.categoryProductId = _data["categoryProductId"];
            this.measureMainId = _data["measureMainId"];
            this.closedMeasureId = _data["closedMeasureId"];
            this.quantityClosedMeasure = _data["quantityClosedMeasure"];
            this.isActive = _data["isActive"];
            this.lastModifierUserId = _data["lastModifierUserId"];
            this.creatorUserId = _data["creatorUserId"];
            this.lastModificationTime = _data["lastModificationTime"] ? moment(_data["lastModificationTime"].toString()) : <any>undefined;
            this.creationTime = _data["creationTime"] ? moment(_data["creationTime"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): Product {
        data = typeof data === 'object' ? data : {};
        let result = new Product();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["description"] = this.description;
        data["categoryProductId"] = this.categoryProductId;
        data["measureMainId"] = this.measureMainId;
        data["closedMeasureId"] = this.closedMeasureId;
        data["quantityClosedMeasure"] = this.quantityClosedMeasure;
        data["isActive"] = this.isActive;
        data["creatorUserId"] = this.creatorUserId;
        data["lastModificationTime"] = this.lastModificationTime ? this.lastModificationTime.toISOString() : <any>undefined;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : <any>undefined;
        return data;
    }

    clone(): Product {
        const json = this.toJSON();
        let result = new Product();
        result.init(json);
        return result;
    }
}

export class ProductPagedResultDto {
    items: Product[] | undefined;
    totalCount: number;

    constructor(data?: ProductPagedResultDto) {
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
                    this.items.push(Product.fromJS(item));
            }
            this.totalCount = _data["totalCount"];
        }
    }

    static fromJS(data: any): ProductPagedResultDto {
        data = typeof data === 'object' ? data : {};
        let result = new ProductPagedResultDto();
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

    clone(): ProductPagedResultDto {
        const json = this.toJSON();
        let result = new ProductPagedResultDto();
        result.init(json);
        return result;
    }
}

export interface ICreateProductDto {
    description: string;
    categoryProductId: number;
    measureMainId: number;
    closedMeasureId: number;
    quantityClosedMeasure: number;
    isActive: boolean;
}

export class CreateProductDto implements ICreateProductDto{
    description: string;
    categoryProductId: number;
    measureMainId: number;
    closedMeasureId: number;
    quantityClosedMeasure: number;
    isActive: boolean;

    constructor(data?: ICreateProductDto) {
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
            this.categoryProductId = _data["categoryProductId"];
            this.measureMainId = _data["measureMainId"];
            this.closedMeasureId = _data["closedMeasureId"];
            this.quantityClosedMeasure = _data["quantityClosedMeasure"];
            this.isActive = _data["isActive"];
        }
    }

    static fromJS(data: any): CreateProductDto {
        data = typeof data === 'object' ? data : {};
        let result = new CreateProductDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["description"] = this.description;
        data["categoryProductId"] = this.categoryProductId;
        data["measureMainId"] = this.measureMainId;
        data["closedMeasureId"] = this.closedMeasureId;
        data["quantityClosedMeasure"] = this.quantityClosedMeasure;
        data["isActive"] = this.isActive;
        return data;
    }

    clone(): CreateProductDto {
        const json = this.toJSON();
        let result = new CreateProductDto();
        result.init(json);
        return result;
    }
}
