import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SessionModel = runtime.Types.Result.DefaultSelection<Prisma.$SessionPayload>;
export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null;
    _min: SessionMinAggregateOutputType | null;
    _max: SessionMaxAggregateOutputType | null;
};
export type SessionMinAggregateOutputType = {
    id: string | null;
    family: string | null;
    refresh_token_hash: string | null;
    ip: string | null;
    last_seen_ip: string | null;
    user_agent: string | null;
    expired: boolean | null;
    user_id: string | null;
    expires_at: Date | null;
    created_at: Date | null;
};
export type SessionMaxAggregateOutputType = {
    id: string | null;
    family: string | null;
    refresh_token_hash: string | null;
    ip: string | null;
    last_seen_ip: string | null;
    user_agent: string | null;
    expired: boolean | null;
    user_id: string | null;
    expires_at: Date | null;
    created_at: Date | null;
};
export type SessionCountAggregateOutputType = {
    id: number;
    family: number;
    refresh_token_hash: number;
    ip: number;
    last_seen_ip: number;
    user_agent: number;
    expired: number;
    user_id: number;
    expires_at: number;
    created_at: number;
    _all: number;
};
export type SessionMinAggregateInputType = {
    id?: true;
    family?: true;
    refresh_token_hash?: true;
    ip?: true;
    last_seen_ip?: true;
    user_agent?: true;
    expired?: true;
    user_id?: true;
    expires_at?: true;
    created_at?: true;
};
export type SessionMaxAggregateInputType = {
    id?: true;
    family?: true;
    refresh_token_hash?: true;
    ip?: true;
    last_seen_ip?: true;
    user_agent?: true;
    expired?: true;
    user_id?: true;
    expires_at?: true;
    created_at?: true;
};
export type SessionCountAggregateInputType = {
    id?: true;
    family?: true;
    refresh_token_hash?: true;
    ip?: true;
    last_seen_ip?: true;
    user_agent?: true;
    expired?: true;
    user_id?: true;
    expires_at?: true;
    created_at?: true;
    _all?: true;
};
export type SessionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionWhereInput;
    orderBy?: Prisma.SessionOrderByWithRelationInput | Prisma.SessionOrderByWithRelationInput[];
    cursor?: Prisma.SessionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SessionCountAggregateInputType;
    _min?: SessionMinAggregateInputType;
    _max?: SessionMaxAggregateInputType;
};
export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
    [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSession[P]> : Prisma.GetScalarType<T[P], AggregateSession[P]>;
};
export type SessionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionWhereInput;
    orderBy?: Prisma.SessionOrderByWithAggregationInput | Prisma.SessionOrderByWithAggregationInput[];
    by: Prisma.SessionScalarFieldEnum[] | Prisma.SessionScalarFieldEnum;
    having?: Prisma.SessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SessionCountAggregateInputType | true;
    _min?: SessionMinAggregateInputType;
    _max?: SessionMaxAggregateInputType;
};
export type SessionGroupByOutputType = {
    id: string;
    family: string;
    refresh_token_hash: string;
    ip: string;
    last_seen_ip: string;
    user_agent: string;
    expired: boolean;
    user_id: string;
    expires_at: Date;
    created_at: Date;
    _count: SessionCountAggregateOutputType | null;
    _min: SessionMinAggregateOutputType | null;
    _max: SessionMaxAggregateOutputType | null;
};
export type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SessionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SessionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SessionGroupByOutputType[P]>;
}>>;
export type SessionWhereInput = {
    AND?: Prisma.SessionWhereInput | Prisma.SessionWhereInput[];
    OR?: Prisma.SessionWhereInput[];
    NOT?: Prisma.SessionWhereInput | Prisma.SessionWhereInput[];
    id?: Prisma.StringFilter<"Session"> | string;
    family?: Prisma.StringFilter<"Session"> | string;
    refresh_token_hash?: Prisma.StringFilter<"Session"> | string;
    ip?: Prisma.StringFilter<"Session"> | string;
    last_seen_ip?: Prisma.StringFilter<"Session"> | string;
    user_agent?: Prisma.StringFilter<"Session"> | string;
    expired?: Prisma.BoolFilter<"Session"> | boolean;
    user_id?: Prisma.StringFilter<"Session"> | string;
    expires_at?: Prisma.DateTimeFilter<"Session"> | Date | string;
    created_at?: Prisma.DateTimeFilter<"Session"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type SessionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    family?: Prisma.SortOrder;
    refresh_token_hash?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    last_seen_ip?: Prisma.SortOrder;
    user_agent?: Prisma.SortOrder;
    expired?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SessionWhereInput | Prisma.SessionWhereInput[];
    OR?: Prisma.SessionWhereInput[];
    NOT?: Prisma.SessionWhereInput | Prisma.SessionWhereInput[];
    family?: Prisma.StringFilter<"Session"> | string;
    refresh_token_hash?: Prisma.StringFilter<"Session"> | string;
    ip?: Prisma.StringFilter<"Session"> | string;
    last_seen_ip?: Prisma.StringFilter<"Session"> | string;
    user_agent?: Prisma.StringFilter<"Session"> | string;
    expired?: Prisma.BoolFilter<"Session"> | boolean;
    user_id?: Prisma.StringFilter<"Session"> | string;
    expires_at?: Prisma.DateTimeFilter<"Session"> | Date | string;
    created_at?: Prisma.DateTimeFilter<"Session"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type SessionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    family?: Prisma.SortOrder;
    refresh_token_hash?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    last_seen_ip?: Prisma.SortOrder;
    user_agent?: Prisma.SortOrder;
    expired?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.SessionCountOrderByAggregateInput;
    _max?: Prisma.SessionMaxOrderByAggregateInput;
    _min?: Prisma.SessionMinOrderByAggregateInput;
};
export type SessionScalarWhereWithAggregatesInput = {
    AND?: Prisma.SessionScalarWhereWithAggregatesInput | Prisma.SessionScalarWhereWithAggregatesInput[];
    OR?: Prisma.SessionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SessionScalarWhereWithAggregatesInput | Prisma.SessionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Session"> | string;
    family?: Prisma.StringWithAggregatesFilter<"Session"> | string;
    refresh_token_hash?: Prisma.StringWithAggregatesFilter<"Session"> | string;
    ip?: Prisma.StringWithAggregatesFilter<"Session"> | string;
    last_seen_ip?: Prisma.StringWithAggregatesFilter<"Session"> | string;
    user_agent?: Prisma.StringWithAggregatesFilter<"Session"> | string;
    expired?: Prisma.BoolWithAggregatesFilter<"Session"> | boolean;
    user_id?: Prisma.StringWithAggregatesFilter<"Session"> | string;
    expires_at?: Prisma.DateTimeWithAggregatesFilter<"Session"> | Date | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Session"> | Date | string;
};
export type SessionCreateInput = {
    id?: string;
    family: string;
    refresh_token_hash: string;
    ip: string;
    last_seen_ip: string;
    user_agent: string;
    expired: boolean;
    expires_at?: Date | string;
    created_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSessionsInput;
};
export type SessionUncheckedCreateInput = {
    id?: string;
    family: string;
    refresh_token_hash: string;
    ip: string;
    last_seen_ip: string;
    user_agent: string;
    expired: boolean;
    user_id: string;
    expires_at?: Date | string;
    created_at?: Date | string;
};
export type SessionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    family?: Prisma.StringFieldUpdateOperationsInput | string;
    refresh_token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    last_seen_ip?: Prisma.StringFieldUpdateOperationsInput | string;
    user_agent?: Prisma.StringFieldUpdateOperationsInput | string;
    expired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput;
};
export type SessionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    family?: Prisma.StringFieldUpdateOperationsInput | string;
    refresh_token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    last_seen_ip?: Prisma.StringFieldUpdateOperationsInput | string;
    user_agent?: Prisma.StringFieldUpdateOperationsInput | string;
    expired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SessionCreateManyInput = {
    id?: string;
    family: string;
    refresh_token_hash: string;
    ip: string;
    last_seen_ip: string;
    user_agent: string;
    expired: boolean;
    user_id: string;
    expires_at?: Date | string;
    created_at?: Date | string;
};
export type SessionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    family?: Prisma.StringFieldUpdateOperationsInput | string;
    refresh_token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    last_seen_ip?: Prisma.StringFieldUpdateOperationsInput | string;
    user_agent?: Prisma.StringFieldUpdateOperationsInput | string;
    expired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SessionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    family?: Prisma.StringFieldUpdateOperationsInput | string;
    refresh_token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    last_seen_ip?: Prisma.StringFieldUpdateOperationsInput | string;
    user_agent?: Prisma.StringFieldUpdateOperationsInput | string;
    expired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SessionListRelationFilter = {
    every?: Prisma.SessionWhereInput;
    some?: Prisma.SessionWhereInput;
    none?: Prisma.SessionWhereInput;
};
export type SessionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SessionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    family?: Prisma.SortOrder;
    refresh_token_hash?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    last_seen_ip?: Prisma.SortOrder;
    user_agent?: Prisma.SortOrder;
    expired?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type SessionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    family?: Prisma.SortOrder;
    refresh_token_hash?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    last_seen_ip?: Prisma.SortOrder;
    user_agent?: Prisma.SortOrder;
    expired?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type SessionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    family?: Prisma.SortOrder;
    refresh_token_hash?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    last_seen_ip?: Prisma.SortOrder;
    user_agent?: Prisma.SortOrder;
    expired?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type SessionCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SessionCreateWithoutUserInput, Prisma.SessionUncheckedCreateWithoutUserInput> | Prisma.SessionCreateWithoutUserInput[] | Prisma.SessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SessionCreateOrConnectWithoutUserInput | Prisma.SessionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SessionCreateManyUserInputEnvelope;
    connect?: Prisma.SessionWhereUniqueInput | Prisma.SessionWhereUniqueInput[];
};
export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SessionCreateWithoutUserInput, Prisma.SessionUncheckedCreateWithoutUserInput> | Prisma.SessionCreateWithoutUserInput[] | Prisma.SessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SessionCreateOrConnectWithoutUserInput | Prisma.SessionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SessionCreateManyUserInputEnvelope;
    connect?: Prisma.SessionWhereUniqueInput | Prisma.SessionWhereUniqueInput[];
};
export type SessionUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SessionCreateWithoutUserInput, Prisma.SessionUncheckedCreateWithoutUserInput> | Prisma.SessionCreateWithoutUserInput[] | Prisma.SessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SessionCreateOrConnectWithoutUserInput | Prisma.SessionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SessionUpsertWithWhereUniqueWithoutUserInput | Prisma.SessionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SessionCreateManyUserInputEnvelope;
    set?: Prisma.SessionWhereUniqueInput | Prisma.SessionWhereUniqueInput[];
    disconnect?: Prisma.SessionWhereUniqueInput | Prisma.SessionWhereUniqueInput[];
    delete?: Prisma.SessionWhereUniqueInput | Prisma.SessionWhereUniqueInput[];
    connect?: Prisma.SessionWhereUniqueInput | Prisma.SessionWhereUniqueInput[];
    update?: Prisma.SessionUpdateWithWhereUniqueWithoutUserInput | Prisma.SessionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SessionUpdateManyWithWhereWithoutUserInput | Prisma.SessionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SessionScalarWhereInput | Prisma.SessionScalarWhereInput[];
};
export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SessionCreateWithoutUserInput, Prisma.SessionUncheckedCreateWithoutUserInput> | Prisma.SessionCreateWithoutUserInput[] | Prisma.SessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SessionCreateOrConnectWithoutUserInput | Prisma.SessionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SessionUpsertWithWhereUniqueWithoutUserInput | Prisma.SessionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SessionCreateManyUserInputEnvelope;
    set?: Prisma.SessionWhereUniqueInput | Prisma.SessionWhereUniqueInput[];
    disconnect?: Prisma.SessionWhereUniqueInput | Prisma.SessionWhereUniqueInput[];
    delete?: Prisma.SessionWhereUniqueInput | Prisma.SessionWhereUniqueInput[];
    connect?: Prisma.SessionWhereUniqueInput | Prisma.SessionWhereUniqueInput[];
    update?: Prisma.SessionUpdateWithWhereUniqueWithoutUserInput | Prisma.SessionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SessionUpdateManyWithWhereWithoutUserInput | Prisma.SessionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SessionScalarWhereInput | Prisma.SessionScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type SessionCreateWithoutUserInput = {
    id?: string;
    family: string;
    refresh_token_hash: string;
    ip: string;
    last_seen_ip: string;
    user_agent: string;
    expired: boolean;
    expires_at?: Date | string;
    created_at?: Date | string;
};
export type SessionUncheckedCreateWithoutUserInput = {
    id?: string;
    family: string;
    refresh_token_hash: string;
    ip: string;
    last_seen_ip: string;
    user_agent: string;
    expired: boolean;
    expires_at?: Date | string;
    created_at?: Date | string;
};
export type SessionCreateOrConnectWithoutUserInput = {
    where: Prisma.SessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SessionCreateWithoutUserInput, Prisma.SessionUncheckedCreateWithoutUserInput>;
};
export type SessionCreateManyUserInputEnvelope = {
    data: Prisma.SessionCreateManyUserInput | Prisma.SessionCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.SessionWhereUniqueInput;
    update: Prisma.XOR<Prisma.SessionUpdateWithoutUserInput, Prisma.SessionUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.SessionCreateWithoutUserInput, Prisma.SessionUncheckedCreateWithoutUserInput>;
};
export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.SessionWhereUniqueInput;
    data: Prisma.XOR<Prisma.SessionUpdateWithoutUserInput, Prisma.SessionUncheckedUpdateWithoutUserInput>;
};
export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.SessionScalarWhereInput;
    data: Prisma.XOR<Prisma.SessionUpdateManyMutationInput, Prisma.SessionUncheckedUpdateManyWithoutUserInput>;
};
export type SessionScalarWhereInput = {
    AND?: Prisma.SessionScalarWhereInput | Prisma.SessionScalarWhereInput[];
    OR?: Prisma.SessionScalarWhereInput[];
    NOT?: Prisma.SessionScalarWhereInput | Prisma.SessionScalarWhereInput[];
    id?: Prisma.StringFilter<"Session"> | string;
    family?: Prisma.StringFilter<"Session"> | string;
    refresh_token_hash?: Prisma.StringFilter<"Session"> | string;
    ip?: Prisma.StringFilter<"Session"> | string;
    last_seen_ip?: Prisma.StringFilter<"Session"> | string;
    user_agent?: Prisma.StringFilter<"Session"> | string;
    expired?: Prisma.BoolFilter<"Session"> | boolean;
    user_id?: Prisma.StringFilter<"Session"> | string;
    expires_at?: Prisma.DateTimeFilter<"Session"> | Date | string;
    created_at?: Prisma.DateTimeFilter<"Session"> | Date | string;
};
export type SessionCreateManyUserInput = {
    id?: string;
    family: string;
    refresh_token_hash: string;
    ip: string;
    last_seen_ip: string;
    user_agent: string;
    expired: boolean;
    expires_at?: Date | string;
    created_at?: Date | string;
};
export type SessionUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    family?: Prisma.StringFieldUpdateOperationsInput | string;
    refresh_token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    last_seen_ip?: Prisma.StringFieldUpdateOperationsInput | string;
    user_agent?: Prisma.StringFieldUpdateOperationsInput | string;
    expired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SessionUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    family?: Prisma.StringFieldUpdateOperationsInput | string;
    refresh_token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    last_seen_ip?: Prisma.StringFieldUpdateOperationsInput | string;
    user_agent?: Prisma.StringFieldUpdateOperationsInput | string;
    expired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    family?: Prisma.StringFieldUpdateOperationsInput | string;
    refresh_token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    last_seen_ip?: Prisma.StringFieldUpdateOperationsInput | string;
    user_agent?: Prisma.StringFieldUpdateOperationsInput | string;
    expired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SessionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    family?: boolean;
    refresh_token_hash?: boolean;
    ip?: boolean;
    last_seen_ip?: boolean;
    user_agent?: boolean;
    expired?: boolean;
    user_id?: boolean;
    expires_at?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["session"]>;
export type SessionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    family?: boolean;
    refresh_token_hash?: boolean;
    ip?: boolean;
    last_seen_ip?: boolean;
    user_agent?: boolean;
    expired?: boolean;
    user_id?: boolean;
    expires_at?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["session"]>;
export type SessionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    family?: boolean;
    refresh_token_hash?: boolean;
    ip?: boolean;
    last_seen_ip?: boolean;
    user_agent?: boolean;
    expired?: boolean;
    user_id?: boolean;
    expires_at?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["session"]>;
export type SessionSelectScalar = {
    id?: boolean;
    family?: boolean;
    refresh_token_hash?: boolean;
    ip?: boolean;
    last_seen_ip?: boolean;
    user_agent?: boolean;
    expired?: boolean;
    user_id?: boolean;
    expires_at?: boolean;
    created_at?: boolean;
};
export type SessionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "family" | "refresh_token_hash" | "ip" | "last_seen_ip" | "user_agent" | "expired" | "user_id" | "expires_at" | "created_at", ExtArgs["result"]["session"]>;
export type SessionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type SessionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type SessionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $SessionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Session";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        family: string;
        refresh_token_hash: string;
        ip: string;
        last_seen_ip: string;
        user_agent: string;
        expired: boolean;
        user_id: string;
        expires_at: Date;
        created_at: Date;
    }, ExtArgs["result"]["session"]>;
    composites: {};
};
export type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SessionPayload, S>;
export type SessionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SessionCountAggregateInputType | true;
};
export interface SessionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Session'];
        meta: {
            name: 'Session';
        };
    };
    findUnique<T extends SessionFindUniqueArgs>(args: Prisma.SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SessionClient<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SessionClient<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SessionFindFirstArgs>(args?: Prisma.SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma.Prisma__SessionClient<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SessionClient<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SessionFindManyArgs>(args?: Prisma.SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SessionCreateArgs>(args: Prisma.SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma.Prisma__SessionClient<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SessionCreateManyArgs>(args?: Prisma.SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SessionDeleteArgs>(args: Prisma.SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma.Prisma__SessionClient<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SessionUpdateArgs>(args: Prisma.SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma.Prisma__SessionClient<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SessionDeleteManyArgs>(args?: Prisma.SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SessionUpdateManyArgs>(args: Prisma.SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SessionUpsertArgs>(args: Prisma.SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma.Prisma__SessionClient<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SessionCountArgs>(args?: Prisma.Subset<T, SessionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SessionCountAggregateOutputType> : number>;
    aggregate<T extends SessionAggregateArgs>(args: Prisma.Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>;
    groupBy<T extends SessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SessionGroupByArgs['orderBy'];
    } : {
        orderBy?: SessionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SessionFieldRefs;
}
export interface Prisma__SessionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SessionFieldRefs {
    readonly id: Prisma.FieldRef<"Session", 'String'>;
    readonly family: Prisma.FieldRef<"Session", 'String'>;
    readonly refresh_token_hash: Prisma.FieldRef<"Session", 'String'>;
    readonly ip: Prisma.FieldRef<"Session", 'String'>;
    readonly last_seen_ip: Prisma.FieldRef<"Session", 'String'>;
    readonly user_agent: Prisma.FieldRef<"Session", 'String'>;
    readonly expired: Prisma.FieldRef<"Session", 'Boolean'>;
    readonly user_id: Prisma.FieldRef<"Session", 'String'>;
    readonly expires_at: Prisma.FieldRef<"Session", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"Session", 'DateTime'>;
}
export type SessionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    include?: Prisma.SessionInclude<ExtArgs> | null;
    where: Prisma.SessionWhereUniqueInput;
};
export type SessionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    include?: Prisma.SessionInclude<ExtArgs> | null;
    where: Prisma.SessionWhereUniqueInput;
};
export type SessionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    include?: Prisma.SessionInclude<ExtArgs> | null;
    where?: Prisma.SessionWhereInput;
    orderBy?: Prisma.SessionOrderByWithRelationInput | Prisma.SessionOrderByWithRelationInput[];
    cursor?: Prisma.SessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessionScalarFieldEnum | Prisma.SessionScalarFieldEnum[];
};
export type SessionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    include?: Prisma.SessionInclude<ExtArgs> | null;
    where?: Prisma.SessionWhereInput;
    orderBy?: Prisma.SessionOrderByWithRelationInput | Prisma.SessionOrderByWithRelationInput[];
    cursor?: Prisma.SessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessionScalarFieldEnum | Prisma.SessionScalarFieldEnum[];
};
export type SessionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    include?: Prisma.SessionInclude<ExtArgs> | null;
    where?: Prisma.SessionWhereInput;
    orderBy?: Prisma.SessionOrderByWithRelationInput | Prisma.SessionOrderByWithRelationInput[];
    cursor?: Prisma.SessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessionScalarFieldEnum | Prisma.SessionScalarFieldEnum[];
};
export type SessionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    include?: Prisma.SessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SessionCreateInput, Prisma.SessionUncheckedCreateInput>;
};
export type SessionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SessionCreateManyInput | Prisma.SessionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SessionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    data: Prisma.SessionCreateManyInput | Prisma.SessionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SessionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SessionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    include?: Prisma.SessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SessionUpdateInput, Prisma.SessionUncheckedUpdateInput>;
    where: Prisma.SessionWhereUniqueInput;
};
export type SessionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SessionUpdateManyMutationInput, Prisma.SessionUncheckedUpdateManyInput>;
    where?: Prisma.SessionWhereInput;
    limit?: number;
};
export type SessionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SessionUpdateManyMutationInput, Prisma.SessionUncheckedUpdateManyInput>;
    where?: Prisma.SessionWhereInput;
    limit?: number;
    include?: Prisma.SessionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SessionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    include?: Prisma.SessionInclude<ExtArgs> | null;
    where: Prisma.SessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SessionCreateInput, Prisma.SessionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SessionUpdateInput, Prisma.SessionUncheckedUpdateInput>;
};
export type SessionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    include?: Prisma.SessionInclude<ExtArgs> | null;
    where: Prisma.SessionWhereUniqueInput;
};
export type SessionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionWhereInput;
    limit?: number;
};
export type SessionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    include?: Prisma.SessionInclude<ExtArgs> | null;
};
