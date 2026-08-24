import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TagsOnDocsModel = runtime.Types.Result.DefaultSelection<Prisma.$TagsOnDocsPayload>;
export type AggregateTagsOnDocs = {
    _count: TagsOnDocsCountAggregateOutputType | null;
    _min: TagsOnDocsMinAggregateOutputType | null;
    _max: TagsOnDocsMaxAggregateOutputType | null;
};
export type TagsOnDocsMinAggregateOutputType = {
    doc_id: string | null;
    tag_id: string | null;
};
export type TagsOnDocsMaxAggregateOutputType = {
    doc_id: string | null;
    tag_id: string | null;
};
export type TagsOnDocsCountAggregateOutputType = {
    doc_id: number;
    tag_id: number;
    _all: number;
};
export type TagsOnDocsMinAggregateInputType = {
    doc_id?: true;
    tag_id?: true;
};
export type TagsOnDocsMaxAggregateInputType = {
    doc_id?: true;
    tag_id?: true;
};
export type TagsOnDocsCountAggregateInputType = {
    doc_id?: true;
    tag_id?: true;
    _all?: true;
};
export type TagsOnDocsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TagsOnDocsWhereInput;
    orderBy?: Prisma.TagsOnDocsOrderByWithRelationInput | Prisma.TagsOnDocsOrderByWithRelationInput[];
    cursor?: Prisma.TagsOnDocsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TagsOnDocsCountAggregateInputType;
    _min?: TagsOnDocsMinAggregateInputType;
    _max?: TagsOnDocsMaxAggregateInputType;
};
export type GetTagsOnDocsAggregateType<T extends TagsOnDocsAggregateArgs> = {
    [P in keyof T & keyof AggregateTagsOnDocs]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTagsOnDocs[P]> : Prisma.GetScalarType<T[P], AggregateTagsOnDocs[P]>;
};
export type TagsOnDocsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TagsOnDocsWhereInput;
    orderBy?: Prisma.TagsOnDocsOrderByWithAggregationInput | Prisma.TagsOnDocsOrderByWithAggregationInput[];
    by: Prisma.TagsOnDocsScalarFieldEnum[] | Prisma.TagsOnDocsScalarFieldEnum;
    having?: Prisma.TagsOnDocsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TagsOnDocsCountAggregateInputType | true;
    _min?: TagsOnDocsMinAggregateInputType;
    _max?: TagsOnDocsMaxAggregateInputType;
};
export type TagsOnDocsGroupByOutputType = {
    doc_id: string;
    tag_id: string;
    _count: TagsOnDocsCountAggregateOutputType | null;
    _min: TagsOnDocsMinAggregateOutputType | null;
    _max: TagsOnDocsMaxAggregateOutputType | null;
};
export type GetTagsOnDocsGroupByPayload<T extends TagsOnDocsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TagsOnDocsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TagsOnDocsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TagsOnDocsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TagsOnDocsGroupByOutputType[P]>;
}>>;
export type TagsOnDocsWhereInput = {
    AND?: Prisma.TagsOnDocsWhereInput | Prisma.TagsOnDocsWhereInput[];
    OR?: Prisma.TagsOnDocsWhereInput[];
    NOT?: Prisma.TagsOnDocsWhereInput | Prisma.TagsOnDocsWhereInput[];
    doc_id?: Prisma.StringFilter<"TagsOnDocs"> | string;
    tag_id?: Prisma.StringFilter<"TagsOnDocs"> | string;
    doc?: Prisma.XOR<Prisma.DocumentScalarRelationFilter, Prisma.DocumentWhereInput>;
    tag?: Prisma.XOR<Prisma.TagScalarRelationFilter, Prisma.TagWhereInput>;
};
export type TagsOnDocsOrderByWithRelationInput = {
    doc_id?: Prisma.SortOrder;
    tag_id?: Prisma.SortOrder;
    doc?: Prisma.DocumentOrderByWithRelationInput;
    tag?: Prisma.TagOrderByWithRelationInput;
};
export type TagsOnDocsWhereUniqueInput = Prisma.AtLeast<{
    doc_id_tag_id?: Prisma.TagsOnDocsDoc_idTag_idCompoundUniqueInput;
    AND?: Prisma.TagsOnDocsWhereInput | Prisma.TagsOnDocsWhereInput[];
    OR?: Prisma.TagsOnDocsWhereInput[];
    NOT?: Prisma.TagsOnDocsWhereInput | Prisma.TagsOnDocsWhereInput[];
    doc_id?: Prisma.StringFilter<"TagsOnDocs"> | string;
    tag_id?: Prisma.StringFilter<"TagsOnDocs"> | string;
    doc?: Prisma.XOR<Prisma.DocumentScalarRelationFilter, Prisma.DocumentWhereInput>;
    tag?: Prisma.XOR<Prisma.TagScalarRelationFilter, Prisma.TagWhereInput>;
}, "doc_id_tag_id">;
export type TagsOnDocsOrderByWithAggregationInput = {
    doc_id?: Prisma.SortOrder;
    tag_id?: Prisma.SortOrder;
    _count?: Prisma.TagsOnDocsCountOrderByAggregateInput;
    _max?: Prisma.TagsOnDocsMaxOrderByAggregateInput;
    _min?: Prisma.TagsOnDocsMinOrderByAggregateInput;
};
export type TagsOnDocsScalarWhereWithAggregatesInput = {
    AND?: Prisma.TagsOnDocsScalarWhereWithAggregatesInput | Prisma.TagsOnDocsScalarWhereWithAggregatesInput[];
    OR?: Prisma.TagsOnDocsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TagsOnDocsScalarWhereWithAggregatesInput | Prisma.TagsOnDocsScalarWhereWithAggregatesInput[];
    doc_id?: Prisma.StringWithAggregatesFilter<"TagsOnDocs"> | string;
    tag_id?: Prisma.StringWithAggregatesFilter<"TagsOnDocs"> | string;
};
export type TagsOnDocsCreateInput = {
    doc: Prisma.DocumentCreateNestedOneWithoutTagsInput;
    tag: Prisma.TagCreateNestedOneWithoutDocsInput;
};
export type TagsOnDocsUncheckedCreateInput = {
    doc_id: string;
    tag_id: string;
};
export type TagsOnDocsUpdateInput = {
    doc?: Prisma.DocumentUpdateOneRequiredWithoutTagsNestedInput;
    tag?: Prisma.TagUpdateOneRequiredWithoutDocsNestedInput;
};
export type TagsOnDocsUncheckedUpdateInput = {
    doc_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tag_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TagsOnDocsCreateManyInput = {
    doc_id: string;
    tag_id: string;
};
export type TagsOnDocsUpdateManyMutationInput = {};
export type TagsOnDocsUncheckedUpdateManyInput = {
    doc_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tag_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TagsOnDocsListRelationFilter = {
    every?: Prisma.TagsOnDocsWhereInput;
    some?: Prisma.TagsOnDocsWhereInput;
    none?: Prisma.TagsOnDocsWhereInput;
};
export type TagsOnDocsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TagsOnDocsDoc_idTag_idCompoundUniqueInput = {
    doc_id: string;
    tag_id: string;
};
export type TagsOnDocsCountOrderByAggregateInput = {
    doc_id?: Prisma.SortOrder;
    tag_id?: Prisma.SortOrder;
};
export type TagsOnDocsMaxOrderByAggregateInput = {
    doc_id?: Prisma.SortOrder;
    tag_id?: Prisma.SortOrder;
};
export type TagsOnDocsMinOrderByAggregateInput = {
    doc_id?: Prisma.SortOrder;
    tag_id?: Prisma.SortOrder;
};
export type TagsOnDocsCreateNestedManyWithoutDocInput = {
    create?: Prisma.XOR<Prisma.TagsOnDocsCreateWithoutDocInput, Prisma.TagsOnDocsUncheckedCreateWithoutDocInput> | Prisma.TagsOnDocsCreateWithoutDocInput[] | Prisma.TagsOnDocsUncheckedCreateWithoutDocInput[];
    connectOrCreate?: Prisma.TagsOnDocsCreateOrConnectWithoutDocInput | Prisma.TagsOnDocsCreateOrConnectWithoutDocInput[];
    createMany?: Prisma.TagsOnDocsCreateManyDocInputEnvelope;
    connect?: Prisma.TagsOnDocsWhereUniqueInput | Prisma.TagsOnDocsWhereUniqueInput[];
};
export type TagsOnDocsUncheckedCreateNestedManyWithoutDocInput = {
    create?: Prisma.XOR<Prisma.TagsOnDocsCreateWithoutDocInput, Prisma.TagsOnDocsUncheckedCreateWithoutDocInput> | Prisma.TagsOnDocsCreateWithoutDocInput[] | Prisma.TagsOnDocsUncheckedCreateWithoutDocInput[];
    connectOrCreate?: Prisma.TagsOnDocsCreateOrConnectWithoutDocInput | Prisma.TagsOnDocsCreateOrConnectWithoutDocInput[];
    createMany?: Prisma.TagsOnDocsCreateManyDocInputEnvelope;
    connect?: Prisma.TagsOnDocsWhereUniqueInput | Prisma.TagsOnDocsWhereUniqueInput[];
};
export type TagsOnDocsUpdateManyWithoutDocNestedInput = {
    create?: Prisma.XOR<Prisma.TagsOnDocsCreateWithoutDocInput, Prisma.TagsOnDocsUncheckedCreateWithoutDocInput> | Prisma.TagsOnDocsCreateWithoutDocInput[] | Prisma.TagsOnDocsUncheckedCreateWithoutDocInput[];
    connectOrCreate?: Prisma.TagsOnDocsCreateOrConnectWithoutDocInput | Prisma.TagsOnDocsCreateOrConnectWithoutDocInput[];
    upsert?: Prisma.TagsOnDocsUpsertWithWhereUniqueWithoutDocInput | Prisma.TagsOnDocsUpsertWithWhereUniqueWithoutDocInput[];
    createMany?: Prisma.TagsOnDocsCreateManyDocInputEnvelope;
    set?: Prisma.TagsOnDocsWhereUniqueInput | Prisma.TagsOnDocsWhereUniqueInput[];
    disconnect?: Prisma.TagsOnDocsWhereUniqueInput | Prisma.TagsOnDocsWhereUniqueInput[];
    delete?: Prisma.TagsOnDocsWhereUniqueInput | Prisma.TagsOnDocsWhereUniqueInput[];
    connect?: Prisma.TagsOnDocsWhereUniqueInput | Prisma.TagsOnDocsWhereUniqueInput[];
    update?: Prisma.TagsOnDocsUpdateWithWhereUniqueWithoutDocInput | Prisma.TagsOnDocsUpdateWithWhereUniqueWithoutDocInput[];
    updateMany?: Prisma.TagsOnDocsUpdateManyWithWhereWithoutDocInput | Prisma.TagsOnDocsUpdateManyWithWhereWithoutDocInput[];
    deleteMany?: Prisma.TagsOnDocsScalarWhereInput | Prisma.TagsOnDocsScalarWhereInput[];
};
export type TagsOnDocsUncheckedUpdateManyWithoutDocNestedInput = {
    create?: Prisma.XOR<Prisma.TagsOnDocsCreateWithoutDocInput, Prisma.TagsOnDocsUncheckedCreateWithoutDocInput> | Prisma.TagsOnDocsCreateWithoutDocInput[] | Prisma.TagsOnDocsUncheckedCreateWithoutDocInput[];
    connectOrCreate?: Prisma.TagsOnDocsCreateOrConnectWithoutDocInput | Prisma.TagsOnDocsCreateOrConnectWithoutDocInput[];
    upsert?: Prisma.TagsOnDocsUpsertWithWhereUniqueWithoutDocInput | Prisma.TagsOnDocsUpsertWithWhereUniqueWithoutDocInput[];
    createMany?: Prisma.TagsOnDocsCreateManyDocInputEnvelope;
    set?: Prisma.TagsOnDocsWhereUniqueInput | Prisma.TagsOnDocsWhereUniqueInput[];
    disconnect?: Prisma.TagsOnDocsWhereUniqueInput | Prisma.TagsOnDocsWhereUniqueInput[];
    delete?: Prisma.TagsOnDocsWhereUniqueInput | Prisma.TagsOnDocsWhereUniqueInput[];
    connect?: Prisma.TagsOnDocsWhereUniqueInput | Prisma.TagsOnDocsWhereUniqueInput[];
    update?: Prisma.TagsOnDocsUpdateWithWhereUniqueWithoutDocInput | Prisma.TagsOnDocsUpdateWithWhereUniqueWithoutDocInput[];
    updateMany?: Prisma.TagsOnDocsUpdateManyWithWhereWithoutDocInput | Prisma.TagsOnDocsUpdateManyWithWhereWithoutDocInput[];
    deleteMany?: Prisma.TagsOnDocsScalarWhereInput | Prisma.TagsOnDocsScalarWhereInput[];
};
export type TagsOnDocsCreateNestedManyWithoutTagInput = {
    create?: Prisma.XOR<Prisma.TagsOnDocsCreateWithoutTagInput, Prisma.TagsOnDocsUncheckedCreateWithoutTagInput> | Prisma.TagsOnDocsCreateWithoutTagInput[] | Prisma.TagsOnDocsUncheckedCreateWithoutTagInput[];
    connectOrCreate?: Prisma.TagsOnDocsCreateOrConnectWithoutTagInput | Prisma.TagsOnDocsCreateOrConnectWithoutTagInput[];
    createMany?: Prisma.TagsOnDocsCreateManyTagInputEnvelope;
    connect?: Prisma.TagsOnDocsWhereUniqueInput | Prisma.TagsOnDocsWhereUniqueInput[];
};
export type TagsOnDocsUncheckedCreateNestedManyWithoutTagInput = {
    create?: Prisma.XOR<Prisma.TagsOnDocsCreateWithoutTagInput, Prisma.TagsOnDocsUncheckedCreateWithoutTagInput> | Prisma.TagsOnDocsCreateWithoutTagInput[] | Prisma.TagsOnDocsUncheckedCreateWithoutTagInput[];
    connectOrCreate?: Prisma.TagsOnDocsCreateOrConnectWithoutTagInput | Prisma.TagsOnDocsCreateOrConnectWithoutTagInput[];
    createMany?: Prisma.TagsOnDocsCreateManyTagInputEnvelope;
    connect?: Prisma.TagsOnDocsWhereUniqueInput | Prisma.TagsOnDocsWhereUniqueInput[];
};
export type TagsOnDocsUpdateManyWithoutTagNestedInput = {
    create?: Prisma.XOR<Prisma.TagsOnDocsCreateWithoutTagInput, Prisma.TagsOnDocsUncheckedCreateWithoutTagInput> | Prisma.TagsOnDocsCreateWithoutTagInput[] | Prisma.TagsOnDocsUncheckedCreateWithoutTagInput[];
    connectOrCreate?: Prisma.TagsOnDocsCreateOrConnectWithoutTagInput | Prisma.TagsOnDocsCreateOrConnectWithoutTagInput[];
    upsert?: Prisma.TagsOnDocsUpsertWithWhereUniqueWithoutTagInput | Prisma.TagsOnDocsUpsertWithWhereUniqueWithoutTagInput[];
    createMany?: Prisma.TagsOnDocsCreateManyTagInputEnvelope;
    set?: Prisma.TagsOnDocsWhereUniqueInput | Prisma.TagsOnDocsWhereUniqueInput[];
    disconnect?: Prisma.TagsOnDocsWhereUniqueInput | Prisma.TagsOnDocsWhereUniqueInput[];
    delete?: Prisma.TagsOnDocsWhereUniqueInput | Prisma.TagsOnDocsWhereUniqueInput[];
    connect?: Prisma.TagsOnDocsWhereUniqueInput | Prisma.TagsOnDocsWhereUniqueInput[];
    update?: Prisma.TagsOnDocsUpdateWithWhereUniqueWithoutTagInput | Prisma.TagsOnDocsUpdateWithWhereUniqueWithoutTagInput[];
    updateMany?: Prisma.TagsOnDocsUpdateManyWithWhereWithoutTagInput | Prisma.TagsOnDocsUpdateManyWithWhereWithoutTagInput[];
    deleteMany?: Prisma.TagsOnDocsScalarWhereInput | Prisma.TagsOnDocsScalarWhereInput[];
};
export type TagsOnDocsUncheckedUpdateManyWithoutTagNestedInput = {
    create?: Prisma.XOR<Prisma.TagsOnDocsCreateWithoutTagInput, Prisma.TagsOnDocsUncheckedCreateWithoutTagInput> | Prisma.TagsOnDocsCreateWithoutTagInput[] | Prisma.TagsOnDocsUncheckedCreateWithoutTagInput[];
    connectOrCreate?: Prisma.TagsOnDocsCreateOrConnectWithoutTagInput | Prisma.TagsOnDocsCreateOrConnectWithoutTagInput[];
    upsert?: Prisma.TagsOnDocsUpsertWithWhereUniqueWithoutTagInput | Prisma.TagsOnDocsUpsertWithWhereUniqueWithoutTagInput[];
    createMany?: Prisma.TagsOnDocsCreateManyTagInputEnvelope;
    set?: Prisma.TagsOnDocsWhereUniqueInput | Prisma.TagsOnDocsWhereUniqueInput[];
    disconnect?: Prisma.TagsOnDocsWhereUniqueInput | Prisma.TagsOnDocsWhereUniqueInput[];
    delete?: Prisma.TagsOnDocsWhereUniqueInput | Prisma.TagsOnDocsWhereUniqueInput[];
    connect?: Prisma.TagsOnDocsWhereUniqueInput | Prisma.TagsOnDocsWhereUniqueInput[];
    update?: Prisma.TagsOnDocsUpdateWithWhereUniqueWithoutTagInput | Prisma.TagsOnDocsUpdateWithWhereUniqueWithoutTagInput[];
    updateMany?: Prisma.TagsOnDocsUpdateManyWithWhereWithoutTagInput | Prisma.TagsOnDocsUpdateManyWithWhereWithoutTagInput[];
    deleteMany?: Prisma.TagsOnDocsScalarWhereInput | Prisma.TagsOnDocsScalarWhereInput[];
};
export type TagsOnDocsCreateWithoutDocInput = {
    tag: Prisma.TagCreateNestedOneWithoutDocsInput;
};
export type TagsOnDocsUncheckedCreateWithoutDocInput = {
    tag_id: string;
};
export type TagsOnDocsCreateOrConnectWithoutDocInput = {
    where: Prisma.TagsOnDocsWhereUniqueInput;
    create: Prisma.XOR<Prisma.TagsOnDocsCreateWithoutDocInput, Prisma.TagsOnDocsUncheckedCreateWithoutDocInput>;
};
export type TagsOnDocsCreateManyDocInputEnvelope = {
    data: Prisma.TagsOnDocsCreateManyDocInput | Prisma.TagsOnDocsCreateManyDocInput[];
    skipDuplicates?: boolean;
};
export type TagsOnDocsUpsertWithWhereUniqueWithoutDocInput = {
    where: Prisma.TagsOnDocsWhereUniqueInput;
    update: Prisma.XOR<Prisma.TagsOnDocsUpdateWithoutDocInput, Prisma.TagsOnDocsUncheckedUpdateWithoutDocInput>;
    create: Prisma.XOR<Prisma.TagsOnDocsCreateWithoutDocInput, Prisma.TagsOnDocsUncheckedCreateWithoutDocInput>;
};
export type TagsOnDocsUpdateWithWhereUniqueWithoutDocInput = {
    where: Prisma.TagsOnDocsWhereUniqueInput;
    data: Prisma.XOR<Prisma.TagsOnDocsUpdateWithoutDocInput, Prisma.TagsOnDocsUncheckedUpdateWithoutDocInput>;
};
export type TagsOnDocsUpdateManyWithWhereWithoutDocInput = {
    where: Prisma.TagsOnDocsScalarWhereInput;
    data: Prisma.XOR<Prisma.TagsOnDocsUpdateManyMutationInput, Prisma.TagsOnDocsUncheckedUpdateManyWithoutDocInput>;
};
export type TagsOnDocsScalarWhereInput = {
    AND?: Prisma.TagsOnDocsScalarWhereInput | Prisma.TagsOnDocsScalarWhereInput[];
    OR?: Prisma.TagsOnDocsScalarWhereInput[];
    NOT?: Prisma.TagsOnDocsScalarWhereInput | Prisma.TagsOnDocsScalarWhereInput[];
    doc_id?: Prisma.StringFilter<"TagsOnDocs"> | string;
    tag_id?: Prisma.StringFilter<"TagsOnDocs"> | string;
};
export type TagsOnDocsCreateWithoutTagInput = {
    doc: Prisma.DocumentCreateNestedOneWithoutTagsInput;
};
export type TagsOnDocsUncheckedCreateWithoutTagInput = {
    doc_id: string;
};
export type TagsOnDocsCreateOrConnectWithoutTagInput = {
    where: Prisma.TagsOnDocsWhereUniqueInput;
    create: Prisma.XOR<Prisma.TagsOnDocsCreateWithoutTagInput, Prisma.TagsOnDocsUncheckedCreateWithoutTagInput>;
};
export type TagsOnDocsCreateManyTagInputEnvelope = {
    data: Prisma.TagsOnDocsCreateManyTagInput | Prisma.TagsOnDocsCreateManyTagInput[];
    skipDuplicates?: boolean;
};
export type TagsOnDocsUpsertWithWhereUniqueWithoutTagInput = {
    where: Prisma.TagsOnDocsWhereUniqueInput;
    update: Prisma.XOR<Prisma.TagsOnDocsUpdateWithoutTagInput, Prisma.TagsOnDocsUncheckedUpdateWithoutTagInput>;
    create: Prisma.XOR<Prisma.TagsOnDocsCreateWithoutTagInput, Prisma.TagsOnDocsUncheckedCreateWithoutTagInput>;
};
export type TagsOnDocsUpdateWithWhereUniqueWithoutTagInput = {
    where: Prisma.TagsOnDocsWhereUniqueInput;
    data: Prisma.XOR<Prisma.TagsOnDocsUpdateWithoutTagInput, Prisma.TagsOnDocsUncheckedUpdateWithoutTagInput>;
};
export type TagsOnDocsUpdateManyWithWhereWithoutTagInput = {
    where: Prisma.TagsOnDocsScalarWhereInput;
    data: Prisma.XOR<Prisma.TagsOnDocsUpdateManyMutationInput, Prisma.TagsOnDocsUncheckedUpdateManyWithoutTagInput>;
};
export type TagsOnDocsCreateManyDocInput = {
    tag_id: string;
};
export type TagsOnDocsUpdateWithoutDocInput = {
    tag?: Prisma.TagUpdateOneRequiredWithoutDocsNestedInput;
};
export type TagsOnDocsUncheckedUpdateWithoutDocInput = {
    tag_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TagsOnDocsUncheckedUpdateManyWithoutDocInput = {
    tag_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TagsOnDocsCreateManyTagInput = {
    doc_id: string;
};
export type TagsOnDocsUpdateWithoutTagInput = {
    doc?: Prisma.DocumentUpdateOneRequiredWithoutTagsNestedInput;
};
export type TagsOnDocsUncheckedUpdateWithoutTagInput = {
    doc_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TagsOnDocsUncheckedUpdateManyWithoutTagInput = {
    doc_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TagsOnDocsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    doc_id?: boolean;
    tag_id?: boolean;
    doc?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.TagDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tagsOnDocs"]>;
export type TagsOnDocsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    doc_id?: boolean;
    tag_id?: boolean;
    doc?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.TagDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tagsOnDocs"]>;
export type TagsOnDocsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    doc_id?: boolean;
    tag_id?: boolean;
    doc?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.TagDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tagsOnDocs"]>;
export type TagsOnDocsSelectScalar = {
    doc_id?: boolean;
    tag_id?: boolean;
};
export type TagsOnDocsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"doc_id" | "tag_id", ExtArgs["result"]["tagsOnDocs"]>;
export type TagsOnDocsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    doc?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.TagDefaultArgs<ExtArgs>;
};
export type TagsOnDocsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    doc?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.TagDefaultArgs<ExtArgs>;
};
export type TagsOnDocsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    doc?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.TagDefaultArgs<ExtArgs>;
};
export type $TagsOnDocsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TagsOnDocs";
    objects: {
        doc: Prisma.$DocumentPayload<ExtArgs>;
        tag: Prisma.$TagPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        doc_id: string;
        tag_id: string;
    }, ExtArgs["result"]["tagsOnDocs"]>;
    composites: {};
};
export type TagsOnDocsGetPayload<S extends boolean | null | undefined | TagsOnDocsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TagsOnDocsPayload, S>;
export type TagsOnDocsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TagsOnDocsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TagsOnDocsCountAggregateInputType | true;
};
export interface TagsOnDocsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TagsOnDocs'];
        meta: {
            name: 'TagsOnDocs';
        };
    };
    findUnique<T extends TagsOnDocsFindUniqueArgs>(args: Prisma.SelectSubset<T, TagsOnDocsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TagsOnDocsClient<runtime.Types.Result.GetResult<Prisma.$TagsOnDocsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TagsOnDocsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TagsOnDocsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TagsOnDocsClient<runtime.Types.Result.GetResult<Prisma.$TagsOnDocsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TagsOnDocsFindFirstArgs>(args?: Prisma.SelectSubset<T, TagsOnDocsFindFirstArgs<ExtArgs>>): Prisma.Prisma__TagsOnDocsClient<runtime.Types.Result.GetResult<Prisma.$TagsOnDocsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TagsOnDocsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TagsOnDocsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TagsOnDocsClient<runtime.Types.Result.GetResult<Prisma.$TagsOnDocsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TagsOnDocsFindManyArgs>(args?: Prisma.SelectSubset<T, TagsOnDocsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TagsOnDocsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TagsOnDocsCreateArgs>(args: Prisma.SelectSubset<T, TagsOnDocsCreateArgs<ExtArgs>>): Prisma.Prisma__TagsOnDocsClient<runtime.Types.Result.GetResult<Prisma.$TagsOnDocsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TagsOnDocsCreateManyArgs>(args?: Prisma.SelectSubset<T, TagsOnDocsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TagsOnDocsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TagsOnDocsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TagsOnDocsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TagsOnDocsDeleteArgs>(args: Prisma.SelectSubset<T, TagsOnDocsDeleteArgs<ExtArgs>>): Prisma.Prisma__TagsOnDocsClient<runtime.Types.Result.GetResult<Prisma.$TagsOnDocsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TagsOnDocsUpdateArgs>(args: Prisma.SelectSubset<T, TagsOnDocsUpdateArgs<ExtArgs>>): Prisma.Prisma__TagsOnDocsClient<runtime.Types.Result.GetResult<Prisma.$TagsOnDocsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TagsOnDocsDeleteManyArgs>(args?: Prisma.SelectSubset<T, TagsOnDocsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TagsOnDocsUpdateManyArgs>(args: Prisma.SelectSubset<T, TagsOnDocsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TagsOnDocsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TagsOnDocsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TagsOnDocsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TagsOnDocsUpsertArgs>(args: Prisma.SelectSubset<T, TagsOnDocsUpsertArgs<ExtArgs>>): Prisma.Prisma__TagsOnDocsClient<runtime.Types.Result.GetResult<Prisma.$TagsOnDocsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TagsOnDocsCountArgs>(args?: Prisma.Subset<T, TagsOnDocsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TagsOnDocsCountAggregateOutputType> : number>;
    aggregate<T extends TagsOnDocsAggregateArgs>(args: Prisma.Subset<T, TagsOnDocsAggregateArgs>): Prisma.PrismaPromise<GetTagsOnDocsAggregateType<T>>;
    groupBy<T extends TagsOnDocsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TagsOnDocsGroupByArgs['orderBy'];
    } : {
        orderBy?: TagsOnDocsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TagsOnDocsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsOnDocsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TagsOnDocsFieldRefs;
}
export interface Prisma__TagsOnDocsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    doc<T extends Prisma.DocumentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DocumentDefaultArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tag<T extends Prisma.TagDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TagDefaultArgs<ExtArgs>>): Prisma.Prisma__TagClient<runtime.Types.Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TagsOnDocsFieldRefs {
    readonly doc_id: Prisma.FieldRef<"TagsOnDocs", 'String'>;
    readonly tag_id: Prisma.FieldRef<"TagsOnDocs", 'String'>;
}
export type TagsOnDocsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TagsOnDocsSelect<ExtArgs> | null;
    omit?: Prisma.TagsOnDocsOmit<ExtArgs> | null;
    include?: Prisma.TagsOnDocsInclude<ExtArgs> | null;
    where: Prisma.TagsOnDocsWhereUniqueInput;
};
export type TagsOnDocsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TagsOnDocsSelect<ExtArgs> | null;
    omit?: Prisma.TagsOnDocsOmit<ExtArgs> | null;
    include?: Prisma.TagsOnDocsInclude<ExtArgs> | null;
    where: Prisma.TagsOnDocsWhereUniqueInput;
};
export type TagsOnDocsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TagsOnDocsSelect<ExtArgs> | null;
    omit?: Prisma.TagsOnDocsOmit<ExtArgs> | null;
    include?: Prisma.TagsOnDocsInclude<ExtArgs> | null;
    where?: Prisma.TagsOnDocsWhereInput;
    orderBy?: Prisma.TagsOnDocsOrderByWithRelationInput | Prisma.TagsOnDocsOrderByWithRelationInput[];
    cursor?: Prisma.TagsOnDocsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TagsOnDocsScalarFieldEnum | Prisma.TagsOnDocsScalarFieldEnum[];
};
export type TagsOnDocsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TagsOnDocsSelect<ExtArgs> | null;
    omit?: Prisma.TagsOnDocsOmit<ExtArgs> | null;
    include?: Prisma.TagsOnDocsInclude<ExtArgs> | null;
    where?: Prisma.TagsOnDocsWhereInput;
    orderBy?: Prisma.TagsOnDocsOrderByWithRelationInput | Prisma.TagsOnDocsOrderByWithRelationInput[];
    cursor?: Prisma.TagsOnDocsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TagsOnDocsScalarFieldEnum | Prisma.TagsOnDocsScalarFieldEnum[];
};
export type TagsOnDocsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TagsOnDocsSelect<ExtArgs> | null;
    omit?: Prisma.TagsOnDocsOmit<ExtArgs> | null;
    include?: Prisma.TagsOnDocsInclude<ExtArgs> | null;
    where?: Prisma.TagsOnDocsWhereInput;
    orderBy?: Prisma.TagsOnDocsOrderByWithRelationInput | Prisma.TagsOnDocsOrderByWithRelationInput[];
    cursor?: Prisma.TagsOnDocsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TagsOnDocsScalarFieldEnum | Prisma.TagsOnDocsScalarFieldEnum[];
};
export type TagsOnDocsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TagsOnDocsSelect<ExtArgs> | null;
    omit?: Prisma.TagsOnDocsOmit<ExtArgs> | null;
    include?: Prisma.TagsOnDocsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TagsOnDocsCreateInput, Prisma.TagsOnDocsUncheckedCreateInput>;
};
export type TagsOnDocsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TagsOnDocsCreateManyInput | Prisma.TagsOnDocsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TagsOnDocsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TagsOnDocsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TagsOnDocsOmit<ExtArgs> | null;
    data: Prisma.TagsOnDocsCreateManyInput | Prisma.TagsOnDocsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TagsOnDocsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TagsOnDocsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TagsOnDocsSelect<ExtArgs> | null;
    omit?: Prisma.TagsOnDocsOmit<ExtArgs> | null;
    include?: Prisma.TagsOnDocsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TagsOnDocsUpdateInput, Prisma.TagsOnDocsUncheckedUpdateInput>;
    where: Prisma.TagsOnDocsWhereUniqueInput;
};
export type TagsOnDocsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TagsOnDocsUpdateManyMutationInput, Prisma.TagsOnDocsUncheckedUpdateManyInput>;
    where?: Prisma.TagsOnDocsWhereInput;
    limit?: number;
};
export type TagsOnDocsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TagsOnDocsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TagsOnDocsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TagsOnDocsUpdateManyMutationInput, Prisma.TagsOnDocsUncheckedUpdateManyInput>;
    where?: Prisma.TagsOnDocsWhereInput;
    limit?: number;
    include?: Prisma.TagsOnDocsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TagsOnDocsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TagsOnDocsSelect<ExtArgs> | null;
    omit?: Prisma.TagsOnDocsOmit<ExtArgs> | null;
    include?: Prisma.TagsOnDocsInclude<ExtArgs> | null;
    where: Prisma.TagsOnDocsWhereUniqueInput;
    create: Prisma.XOR<Prisma.TagsOnDocsCreateInput, Prisma.TagsOnDocsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TagsOnDocsUpdateInput, Prisma.TagsOnDocsUncheckedUpdateInput>;
};
export type TagsOnDocsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TagsOnDocsSelect<ExtArgs> | null;
    omit?: Prisma.TagsOnDocsOmit<ExtArgs> | null;
    include?: Prisma.TagsOnDocsInclude<ExtArgs> | null;
    where: Prisma.TagsOnDocsWhereUniqueInput;
};
export type TagsOnDocsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TagsOnDocsWhereInput;
    limit?: number;
};
export type TagsOnDocsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TagsOnDocsSelect<ExtArgs> | null;
    omit?: Prisma.TagsOnDocsOmit<ExtArgs> | null;
    include?: Prisma.TagsOnDocsInclude<ExtArgs> | null;
};
