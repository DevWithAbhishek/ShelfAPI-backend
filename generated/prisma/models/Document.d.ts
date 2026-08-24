import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DocumentModel = runtime.Types.Result.DefaultSelection<Prisma.$DocumentPayload>;
export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null;
    _min: DocumentMinAggregateOutputType | null;
    _max: DocumentMaxAggregateOutputType | null;
};
export type DocumentMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type DocumentMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type DocumentCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type DocumentMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
};
export type DocumentMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
};
export type DocumentCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type DocumentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithRelationInput | Prisma.DocumentOrderByWithRelationInput[];
    cursor?: Prisma.DocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DocumentCountAggregateInputType;
    _min?: DocumentMinAggregateInputType;
    _max?: DocumentMaxAggregateInputType;
};
export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
    [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDocument[P]> : Prisma.GetScalarType<T[P], AggregateDocument[P]>;
};
export type DocumentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithAggregationInput | Prisma.DocumentOrderByWithAggregationInput[];
    by: Prisma.DocumentScalarFieldEnum[] | Prisma.DocumentScalarFieldEnum;
    having?: Prisma.DocumentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DocumentCountAggregateInputType | true;
    _min?: DocumentMinAggregateInputType;
    _max?: DocumentMaxAggregateInputType;
};
export type DocumentGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: DocumentCountAggregateOutputType | null;
    _min: DocumentMinAggregateOutputType | null;
    _max: DocumentMaxAggregateOutputType | null;
};
export type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DocumentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DocumentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DocumentGroupByOutputType[P]>;
}>>;
export type DocumentWhereInput = {
    AND?: Prisma.DocumentWhereInput | Prisma.DocumentWhereInput[];
    OR?: Prisma.DocumentWhereInput[];
    NOT?: Prisma.DocumentWhereInput | Prisma.DocumentWhereInput[];
    id?: Prisma.StringFilter<"Document"> | string;
    title?: Prisma.StringFilter<"Document"> | string;
    description?: Prisma.StringNullableFilter<"Document"> | string | null;
    user_id?: Prisma.StringFilter<"Document"> | string;
    created_at?: Prisma.DateTimeFilter<"Document"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Document"> | Date | string;
    attachment?: Prisma.XOR<Prisma.AttachmentNullableScalarRelationFilter, Prisma.AttachmentWhereInput> | null;
    tags?: Prisma.TagsOnDocsListRelationFilter;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type DocumentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    attachment?: Prisma.AttachmentOrderByWithRelationInput;
    tags?: Prisma.TagsOnDocsOrderByRelationAggregateInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    user_id_created_at?: Prisma.DocumentUser_idCreated_atCompoundUniqueInput;
    AND?: Prisma.DocumentWhereInput | Prisma.DocumentWhereInput[];
    OR?: Prisma.DocumentWhereInput[];
    NOT?: Prisma.DocumentWhereInput | Prisma.DocumentWhereInput[];
    title?: Prisma.StringFilter<"Document"> | string;
    description?: Prisma.StringNullableFilter<"Document"> | string | null;
    user_id?: Prisma.StringFilter<"Document"> | string;
    created_at?: Prisma.DateTimeFilter<"Document"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Document"> | Date | string;
    attachment?: Prisma.XOR<Prisma.AttachmentNullableScalarRelationFilter, Prisma.AttachmentWhereInput> | null;
    tags?: Prisma.TagsOnDocsListRelationFilter;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "user_id_created_at">;
export type DocumentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.DocumentCountOrderByAggregateInput;
    _max?: Prisma.DocumentMaxOrderByAggregateInput;
    _min?: Prisma.DocumentMinOrderByAggregateInput;
};
export type DocumentScalarWhereWithAggregatesInput = {
    AND?: Prisma.DocumentScalarWhereWithAggregatesInput | Prisma.DocumentScalarWhereWithAggregatesInput[];
    OR?: Prisma.DocumentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DocumentScalarWhereWithAggregatesInput | Prisma.DocumentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Document"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Document"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Document"> | string | null;
    user_id?: Prisma.StringWithAggregatesFilter<"Document"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Document"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Document"> | Date | string;
};
export type DocumentCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    attachment?: Prisma.AttachmentCreateNestedOneWithoutDocInput;
    tags?: Prisma.TagsOnDocsCreateNestedManyWithoutDocInput;
    user: Prisma.UserCreateNestedOneWithoutDocsInput;
};
export type DocumentUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    attachment?: Prisma.AttachmentUncheckedCreateNestedOneWithoutDocInput;
    tags?: Prisma.TagsOnDocsUncheckedCreateNestedManyWithoutDocInput;
};
export type DocumentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attachment?: Prisma.AttachmentUpdateOneWithoutDocNestedInput;
    tags?: Prisma.TagsOnDocsUpdateManyWithoutDocNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutDocsNestedInput;
};
export type DocumentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attachment?: Prisma.AttachmentUncheckedUpdateOneWithoutDocNestedInput;
    tags?: Prisma.TagsOnDocsUncheckedUpdateManyWithoutDocNestedInput;
};
export type DocumentCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type DocumentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentListRelationFilter = {
    every?: Prisma.DocumentWhereInput;
    some?: Prisma.DocumentWhereInput;
    none?: Prisma.DocumentWhereInput;
};
export type DocumentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DocumentUser_idCreated_atCompoundUniqueInput = {
    user_id: string;
    created_at: Date | string;
};
export type DocumentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type DocumentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type DocumentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type DocumentScalarRelationFilter = {
    is?: Prisma.DocumentWhereInput;
    isNot?: Prisma.DocumentWhereInput;
};
export type DocumentCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutUserInput, Prisma.DocumentUncheckedCreateWithoutUserInput> | Prisma.DocumentCreateWithoutUserInput[] | Prisma.DocumentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutUserInput | Prisma.DocumentCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.DocumentCreateManyUserInputEnvelope;
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
};
export type DocumentUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutUserInput, Prisma.DocumentUncheckedCreateWithoutUserInput> | Prisma.DocumentCreateWithoutUserInput[] | Prisma.DocumentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutUserInput | Prisma.DocumentCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.DocumentCreateManyUserInputEnvelope;
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
};
export type DocumentUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutUserInput, Prisma.DocumentUncheckedCreateWithoutUserInput> | Prisma.DocumentCreateWithoutUserInput[] | Prisma.DocumentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutUserInput | Prisma.DocumentCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.DocumentUpsertWithWhereUniqueWithoutUserInput | Prisma.DocumentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.DocumentCreateManyUserInputEnvelope;
    set?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    disconnect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    delete?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    update?: Prisma.DocumentUpdateWithWhereUniqueWithoutUserInput | Prisma.DocumentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.DocumentUpdateManyWithWhereWithoutUserInput | Prisma.DocumentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
};
export type DocumentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutUserInput, Prisma.DocumentUncheckedCreateWithoutUserInput> | Prisma.DocumentCreateWithoutUserInput[] | Prisma.DocumentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutUserInput | Prisma.DocumentCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.DocumentUpsertWithWhereUniqueWithoutUserInput | Prisma.DocumentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.DocumentCreateManyUserInputEnvelope;
    set?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    disconnect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    delete?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    update?: Prisma.DocumentUpdateWithWhereUniqueWithoutUserInput | Prisma.DocumentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.DocumentUpdateManyWithWhereWithoutUserInput | Prisma.DocumentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DocumentCreateNestedOneWithoutAttachmentInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutAttachmentInput, Prisma.DocumentUncheckedCreateWithoutAttachmentInput>;
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutAttachmentInput;
    connect?: Prisma.DocumentWhereUniqueInput;
};
export type DocumentUpdateOneRequiredWithoutAttachmentNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutAttachmentInput, Prisma.DocumentUncheckedCreateWithoutAttachmentInput>;
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutAttachmentInput;
    upsert?: Prisma.DocumentUpsertWithoutAttachmentInput;
    connect?: Prisma.DocumentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DocumentUpdateToOneWithWhereWithoutAttachmentInput, Prisma.DocumentUpdateWithoutAttachmentInput>, Prisma.DocumentUncheckedUpdateWithoutAttachmentInput>;
};
export type DocumentCreateNestedOneWithoutTagsInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutTagsInput, Prisma.DocumentUncheckedCreateWithoutTagsInput>;
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutTagsInput;
    connect?: Prisma.DocumentWhereUniqueInput;
};
export type DocumentUpdateOneRequiredWithoutTagsNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutTagsInput, Prisma.DocumentUncheckedCreateWithoutTagsInput>;
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutTagsInput;
    upsert?: Prisma.DocumentUpsertWithoutTagsInput;
    connect?: Prisma.DocumentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DocumentUpdateToOneWithWhereWithoutTagsInput, Prisma.DocumentUpdateWithoutTagsInput>, Prisma.DocumentUncheckedUpdateWithoutTagsInput>;
};
export type DocumentCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    attachment?: Prisma.AttachmentCreateNestedOneWithoutDocInput;
    tags?: Prisma.TagsOnDocsCreateNestedManyWithoutDocInput;
};
export type DocumentUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    attachment?: Prisma.AttachmentUncheckedCreateNestedOneWithoutDocInput;
    tags?: Prisma.TagsOnDocsUncheckedCreateNestedManyWithoutDocInput;
};
export type DocumentCreateOrConnectWithoutUserInput = {
    where: Prisma.DocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutUserInput, Prisma.DocumentUncheckedCreateWithoutUserInput>;
};
export type DocumentCreateManyUserInputEnvelope = {
    data: Prisma.DocumentCreateManyUserInput | Prisma.DocumentCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type DocumentUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.DocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.DocumentUpdateWithoutUserInput, Prisma.DocumentUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutUserInput, Prisma.DocumentUncheckedCreateWithoutUserInput>;
};
export type DocumentUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.DocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.DocumentUpdateWithoutUserInput, Prisma.DocumentUncheckedUpdateWithoutUserInput>;
};
export type DocumentUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.DocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.DocumentUpdateManyMutationInput, Prisma.DocumentUncheckedUpdateManyWithoutUserInput>;
};
export type DocumentScalarWhereInput = {
    AND?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
    OR?: Prisma.DocumentScalarWhereInput[];
    NOT?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
    id?: Prisma.StringFilter<"Document"> | string;
    title?: Prisma.StringFilter<"Document"> | string;
    description?: Prisma.StringNullableFilter<"Document"> | string | null;
    user_id?: Prisma.StringFilter<"Document"> | string;
    created_at?: Prisma.DateTimeFilter<"Document"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Document"> | Date | string;
};
export type DocumentCreateWithoutAttachmentInput = {
    id?: string;
    title: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tags?: Prisma.TagsOnDocsCreateNestedManyWithoutDocInput;
    user: Prisma.UserCreateNestedOneWithoutDocsInput;
};
export type DocumentUncheckedCreateWithoutAttachmentInput = {
    id?: string;
    title: string;
    description?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tags?: Prisma.TagsOnDocsUncheckedCreateNestedManyWithoutDocInput;
};
export type DocumentCreateOrConnectWithoutAttachmentInput = {
    where: Prisma.DocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutAttachmentInput, Prisma.DocumentUncheckedCreateWithoutAttachmentInput>;
};
export type DocumentUpsertWithoutAttachmentInput = {
    update: Prisma.XOR<Prisma.DocumentUpdateWithoutAttachmentInput, Prisma.DocumentUncheckedUpdateWithoutAttachmentInput>;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutAttachmentInput, Prisma.DocumentUncheckedCreateWithoutAttachmentInput>;
    where?: Prisma.DocumentWhereInput;
};
export type DocumentUpdateToOneWithWhereWithoutAttachmentInput = {
    where?: Prisma.DocumentWhereInput;
    data: Prisma.XOR<Prisma.DocumentUpdateWithoutAttachmentInput, Prisma.DocumentUncheckedUpdateWithoutAttachmentInput>;
};
export type DocumentUpdateWithoutAttachmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: Prisma.TagsOnDocsUpdateManyWithoutDocNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutDocsNestedInput;
};
export type DocumentUncheckedUpdateWithoutAttachmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: Prisma.TagsOnDocsUncheckedUpdateManyWithoutDocNestedInput;
};
export type DocumentCreateWithoutTagsInput = {
    id?: string;
    title: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    attachment?: Prisma.AttachmentCreateNestedOneWithoutDocInput;
    user: Prisma.UserCreateNestedOneWithoutDocsInput;
};
export type DocumentUncheckedCreateWithoutTagsInput = {
    id?: string;
    title: string;
    description?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    attachment?: Prisma.AttachmentUncheckedCreateNestedOneWithoutDocInput;
};
export type DocumentCreateOrConnectWithoutTagsInput = {
    where: Prisma.DocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutTagsInput, Prisma.DocumentUncheckedCreateWithoutTagsInput>;
};
export type DocumentUpsertWithoutTagsInput = {
    update: Prisma.XOR<Prisma.DocumentUpdateWithoutTagsInput, Prisma.DocumentUncheckedUpdateWithoutTagsInput>;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutTagsInput, Prisma.DocumentUncheckedCreateWithoutTagsInput>;
    where?: Prisma.DocumentWhereInput;
};
export type DocumentUpdateToOneWithWhereWithoutTagsInput = {
    where?: Prisma.DocumentWhereInput;
    data: Prisma.XOR<Prisma.DocumentUpdateWithoutTagsInput, Prisma.DocumentUncheckedUpdateWithoutTagsInput>;
};
export type DocumentUpdateWithoutTagsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attachment?: Prisma.AttachmentUpdateOneWithoutDocNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutDocsNestedInput;
};
export type DocumentUncheckedUpdateWithoutTagsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attachment?: Prisma.AttachmentUncheckedUpdateOneWithoutDocNestedInput;
};
export type DocumentCreateManyUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type DocumentUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attachment?: Prisma.AttachmentUpdateOneWithoutDocNestedInput;
    tags?: Prisma.TagsOnDocsUpdateManyWithoutDocNestedInput;
};
export type DocumentUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attachment?: Prisma.AttachmentUncheckedUpdateOneWithoutDocNestedInput;
    tags?: Prisma.TagsOnDocsUncheckedUpdateManyWithoutDocNestedInput;
};
export type DocumentUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentCountOutputType = {
    tags: number;
};
export type DocumentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tags?: boolean | DocumentCountOutputTypeCountTagsArgs;
};
export type DocumentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentCountOutputTypeSelect<ExtArgs> | null;
};
export type DocumentCountOutputTypeCountTagsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TagsOnDocsWhereInput;
};
export type DocumentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    attachment?: boolean | Prisma.Document$attachmentArgs<ExtArgs>;
    tags?: boolean | Prisma.Document$tagsArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.DocumentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["document"]>;
export type DocumentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["document"]>;
export type DocumentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["document"]>;
export type DocumentSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type DocumentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "user_id" | "created_at" | "updated_at", ExtArgs["result"]["document"]>;
export type DocumentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attachment?: boolean | Prisma.Document$attachmentArgs<ExtArgs>;
    tags?: boolean | Prisma.Document$tagsArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.DocumentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DocumentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $DocumentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Document";
    objects: {
        attachment: Prisma.$AttachmentPayload<ExtArgs> | null;
        tags: Prisma.$TagsOnDocsPayload<ExtArgs>[];
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string | null;
        user_id: string;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["document"]>;
    composites: {};
};
export type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DocumentPayload, S>;
export type DocumentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DocumentCountAggregateInputType | true;
};
export interface DocumentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Document'];
        meta: {
            name: 'Document';
        };
    };
    findUnique<T extends DocumentFindUniqueArgs>(args: Prisma.SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DocumentFindFirstArgs>(args?: Prisma.SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DocumentFindManyArgs>(args?: Prisma.SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DocumentCreateArgs>(args: Prisma.SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DocumentCreateManyArgs>(args?: Prisma.SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DocumentDeleteArgs>(args: Prisma.SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DocumentUpdateArgs>(args: Prisma.SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DocumentDeleteManyArgs>(args?: Prisma.SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DocumentUpdateManyArgs>(args: Prisma.SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DocumentUpsertArgs>(args: Prisma.SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DocumentCountArgs>(args?: Prisma.Subset<T, DocumentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DocumentCountAggregateOutputType> : number>;
    aggregate<T extends DocumentAggregateArgs>(args: Prisma.Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>;
    groupBy<T extends DocumentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DocumentGroupByArgs['orderBy'];
    } : {
        orderBy?: DocumentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DocumentFieldRefs;
}
export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    attachment<T extends Prisma.Document$attachmentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Document$attachmentArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    tags<T extends Prisma.Document$tagsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Document$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TagsOnDocsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DocumentFieldRefs {
    readonly id: Prisma.FieldRef<"Document", 'String'>;
    readonly title: Prisma.FieldRef<"Document", 'String'>;
    readonly description: Prisma.FieldRef<"Document", 'String'>;
    readonly user_id: Prisma.FieldRef<"Document", 'String'>;
    readonly created_at: Prisma.FieldRef<"Document", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Document", 'DateTime'>;
}
export type DocumentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where: Prisma.DocumentWhereUniqueInput;
};
export type DocumentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where: Prisma.DocumentWhereUniqueInput;
};
export type DocumentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithRelationInput | Prisma.DocumentOrderByWithRelationInput[];
    cursor?: Prisma.DocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentScalarFieldEnum | Prisma.DocumentScalarFieldEnum[];
};
export type DocumentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithRelationInput | Prisma.DocumentOrderByWithRelationInput[];
    cursor?: Prisma.DocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentScalarFieldEnum | Prisma.DocumentScalarFieldEnum[];
};
export type DocumentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithRelationInput | Prisma.DocumentOrderByWithRelationInput[];
    cursor?: Prisma.DocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentScalarFieldEnum | Prisma.DocumentScalarFieldEnum[];
};
export type DocumentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentCreateInput, Prisma.DocumentUncheckedCreateInput>;
};
export type DocumentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DocumentCreateManyInput | Prisma.DocumentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DocumentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    data: Prisma.DocumentCreateManyInput | Prisma.DocumentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DocumentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DocumentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentUpdateInput, Prisma.DocumentUncheckedUpdateInput>;
    where: Prisma.DocumentWhereUniqueInput;
};
export type DocumentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DocumentUpdateManyMutationInput, Prisma.DocumentUncheckedUpdateManyInput>;
    where?: Prisma.DocumentWhereInput;
    limit?: number;
};
export type DocumentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentUpdateManyMutationInput, Prisma.DocumentUncheckedUpdateManyInput>;
    where?: Prisma.DocumentWhereInput;
    limit?: number;
    include?: Prisma.DocumentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DocumentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where: Prisma.DocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentCreateInput, Prisma.DocumentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DocumentUpdateInput, Prisma.DocumentUncheckedUpdateInput>;
};
export type DocumentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where: Prisma.DocumentWhereUniqueInput;
};
export type DocumentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentWhereInput;
    limit?: number;
};
export type Document$attachmentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    where?: Prisma.AttachmentWhereInput;
};
export type Document$tagsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DocumentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
};
