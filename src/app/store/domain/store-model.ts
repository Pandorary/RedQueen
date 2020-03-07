
/**
 *
 * IProductItem
 * @export
 * @interface IProductItem
 */
 export declare interface IProductItem {
    // id: string; // id
    identification?: string; // 识别码
    name?: string; // 名称
    categoryName?: string; // 分类名称
    brand?: string; // 品牌
    quantity?: number; // 数量
    specification?: string; // 规格
    status?: number; // 使用状态(1新;2正常;3旧;0超用)
    depreciationDuration?: number; // 折旧时长
    frequency?: number; // 使用高频率(次/天)
    satisfaction?: number; // 满意度(1-10)
    isAbandon?: number; // 是否废弃(1已废弃,0没有废弃)
    canReplace?: number; // 能否被物品替代(1能,0不能)
    replaceItem?: string; // 可替代的物品
    replaceItemSource?: string; // 可替代物品来源
    remark?: string; // 备注
    createTime?: string; // 创建时间
    createBy?: string; // 创建人
    updateTime?: string; // 修改时间
    updateBy?: string // 修改人
 }

//  export class ProductItem {
//     // id: string; // id
//     identification: string; // 识别码
//     name: string; // 名称
//     categoryName: string; // 分类名称
//     brand: string; // 品牌
//     quantity: number; // 数量
//     specification: string; // 规格
//     status: number; // 使用状态(1新;2正常;3旧;0超用)
//     depreciationDuration: number; // 折旧时长
//     frequency: number; // 使用高频率(次/天)
//     satisfaction: number; // 满意度(1-10)
//     isAbandon: number; // 是否废弃(1已废弃,0没有废弃)
//     canReplace: number; // 能否被物品替代(1能,0不能)
//     replaceItem: string; // 可替代的物品
//     replaceItemSource: string; // 可替代物品来源
//     remark: string; // 备注
//     createTime: string; // 创建时间
//     createBy: string; // 创建人
//     updateTime: string; // 修改时间
//     updateBy: string // 修改人
//  }