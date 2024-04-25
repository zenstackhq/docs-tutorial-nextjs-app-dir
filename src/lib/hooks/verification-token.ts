/* eslint-disable */
import type { Prisma, VerificationToken } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError } from '@zenstackhq/tanstack-query/runtime-v5';
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateVerificationToken(
    options?: Omit<
        UseMutationOptions<VerificationToken | undefined, DefaultError, Prisma.VerificationTokenCreateArgs>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.VerificationTokenCreateArgs, DefaultError, VerificationToken, true>(
        'VerificationToken',
        'POST',
        `${endpoint}/verificationToken/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.VerificationTokenCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.VerificationTokenCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, VerificationToken, Prisma.VerificationTokenGetPayload<T>> | undefined,
                    DefaultError,
                    Prisma.SelectSubset<T, Prisma.VerificationTokenCreateArgs>
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, VerificationToken, Prisma.VerificationTokenGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyVerificationToken(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.VerificationTokenCreateManyArgs>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<
        Prisma.VerificationTokenCreateManyArgs,
        DefaultError,
        Prisma.BatchPayload,
        false
    >(
        'VerificationToken',
        'POST',
        `${endpoint}/verificationToken/createMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.VerificationTokenCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.VerificationTokenCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    DefaultError,
                    Prisma.SelectSubset<T, Prisma.VerificationTokenCreateManyArgs>
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyVerificationToken<
    TArgs extends Prisma.VerificationTokenFindManyArgs,
    TQueryFnData = Array<Prisma.VerificationTokenGetPayload<TArgs> & { $optimistic?: boolean }>,
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args?: Prisma.SelectSubset<TArgs, Prisma.VerificationTokenFindManyArgs>,
    options?: Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>(
        'VerificationToken',
        `${endpoint}/verificationToken/findMany`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useInfiniteFindManyVerificationToken<
    TArgs extends Prisma.VerificationTokenFindManyArgs,
    TQueryFnData = Array<Prisma.VerificationTokenGetPayload<TArgs>>,
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args?: Prisma.SelectSubset<TArgs, Prisma.VerificationTokenFindManyArgs>,
    options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey'>,
) {
    options = options ?? { initialPageParam: undefined, getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>(
        'VerificationToken',
        `${endpoint}/verificationToken/findMany`,
        args,
        options,
        fetch,
    );
}

export function useSuspenseFindManyVerificationToken<
    TArgs extends Prisma.VerificationTokenFindManyArgs,
    TQueryFnData = Array<Prisma.VerificationTokenGetPayload<TArgs> & { $optimistic?: boolean }>,
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args?: Prisma.SelectSubset<TArgs, Prisma.VerificationTokenFindManyArgs>,
    options?: Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>(
        'VerificationToken',
        `${endpoint}/verificationToken/findMany`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useSuspenseInfiniteFindManyVerificationToken<
    TArgs extends Prisma.VerificationTokenFindManyArgs,
    TQueryFnData = Array<Prisma.VerificationTokenGetPayload<TArgs>>,
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args?: Prisma.SelectSubset<TArgs, Prisma.VerificationTokenFindManyArgs>,
    options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey'>,
) {
    options = options ?? { initialPageParam: undefined, getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>(
        'VerificationToken',
        `${endpoint}/verificationToken/findMany`,
        args,
        options,
        fetch,
    );
}

export function useFindUniqueVerificationToken<
    TArgs extends Prisma.VerificationTokenFindUniqueArgs,
    TQueryFnData = Prisma.VerificationTokenGetPayload<TArgs> & { $optimistic?: boolean },
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args: Prisma.SelectSubset<TArgs, Prisma.VerificationTokenFindUniqueArgs>,
    options?: Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>(
        'VerificationToken',
        `${endpoint}/verificationToken/findUnique`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useSuspenseFindUniqueVerificationToken<
    TArgs extends Prisma.VerificationTokenFindUniqueArgs,
    TQueryFnData = Prisma.VerificationTokenGetPayload<TArgs> & { $optimistic?: boolean },
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args: Prisma.SelectSubset<TArgs, Prisma.VerificationTokenFindUniqueArgs>,
    options?: Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>(
        'VerificationToken',
        `${endpoint}/verificationToken/findUnique`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useFindFirstVerificationToken<
    TArgs extends Prisma.VerificationTokenFindFirstArgs,
    TQueryFnData = Prisma.VerificationTokenGetPayload<TArgs> & { $optimistic?: boolean },
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args?: Prisma.SelectSubset<TArgs, Prisma.VerificationTokenFindFirstArgs>,
    options?: Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>(
        'VerificationToken',
        `${endpoint}/verificationToken/findFirst`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useSuspenseFindFirstVerificationToken<
    TArgs extends Prisma.VerificationTokenFindFirstArgs,
    TQueryFnData = Prisma.VerificationTokenGetPayload<TArgs> & { $optimistic?: boolean },
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args?: Prisma.SelectSubset<TArgs, Prisma.VerificationTokenFindFirstArgs>,
    options?: Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>(
        'VerificationToken',
        `${endpoint}/verificationToken/findFirst`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useUpdateVerificationToken(
    options?: Omit<
        UseMutationOptions<VerificationToken | undefined, DefaultError, Prisma.VerificationTokenUpdateArgs>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.VerificationTokenUpdateArgs, DefaultError, VerificationToken, true>(
        'VerificationToken',
        'PUT',
        `${endpoint}/verificationToken/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.VerificationTokenUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, VerificationToken, Prisma.VerificationTokenGetPayload<T>> | undefined,
                    DefaultError,
                    Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateArgs>
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, VerificationToken, Prisma.VerificationTokenGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyVerificationToken(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.VerificationTokenUpdateManyArgs>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<
        Prisma.VerificationTokenUpdateManyArgs,
        DefaultError,
        Prisma.BatchPayload,
        false
    >(
        'VerificationToken',
        'PUT',
        `${endpoint}/verificationToken/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.VerificationTokenUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    DefaultError,
                    Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateManyArgs>
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertVerificationToken(
    options?: Omit<
        UseMutationOptions<VerificationToken | undefined, DefaultError, Prisma.VerificationTokenUpsertArgs>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.VerificationTokenUpsertArgs, DefaultError, VerificationToken, true>(
        'VerificationToken',
        'POST',
        `${endpoint}/verificationToken/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.VerificationTokenUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.VerificationTokenUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, VerificationToken, Prisma.VerificationTokenGetPayload<T>> | undefined,
                    DefaultError,
                    Prisma.SelectSubset<T, Prisma.VerificationTokenUpsertArgs>
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, VerificationToken, Prisma.VerificationTokenGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteVerificationToken(
    options?: Omit<
        UseMutationOptions<VerificationToken | undefined, DefaultError, Prisma.VerificationTokenDeleteArgs>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.VerificationTokenDeleteArgs, DefaultError, VerificationToken, true>(
        'VerificationToken',
        'DELETE',
        `${endpoint}/verificationToken/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.VerificationTokenDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, VerificationToken, Prisma.VerificationTokenGetPayload<T>> | undefined,
                    DefaultError,
                    Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteArgs>
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, VerificationToken, Prisma.VerificationTokenGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyVerificationToken(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.VerificationTokenDeleteManyArgs>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<
        Prisma.VerificationTokenDeleteManyArgs,
        DefaultError,
        Prisma.BatchPayload,
        false
    >(
        'VerificationToken',
        'DELETE',
        `${endpoint}/verificationToken/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.VerificationTokenDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    DefaultError,
                    Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteManyArgs>
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateVerificationToken<
    TArgs extends Prisma.VerificationTokenAggregateArgs,
    TQueryFnData = Prisma.GetVerificationTokenAggregateType<TArgs>,
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args: Prisma.SelectSubset<TArgs, Prisma.VerificationTokenAggregateArgs>,
    options?: Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>(
        'VerificationToken',
        `${endpoint}/verificationToken/aggregate`,
        args,
        options,
        fetch,
    );
}

export function useSuspenseAggregateVerificationToken<
    TArgs extends Prisma.VerificationTokenAggregateArgs,
    TQueryFnData = Prisma.GetVerificationTokenAggregateType<TArgs>,
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args: Prisma.SelectSubset<TArgs, Prisma.VerificationTokenAggregateArgs>,
    options?: Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>(
        'VerificationToken',
        `${endpoint}/verificationToken/aggregate`,
        args,
        options,
        fetch,
    );
}

export function useGroupByVerificationToken<
    TArgs extends Prisma.VerificationTokenGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
        Prisma.Extends<'skip', Prisma.Keys<TArgs>>,
        Prisma.Extends<'take', Prisma.Keys<TArgs>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.VerificationTokenGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<TArgs['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
        ? `Error: "by" must not be empty.`
        : HavingValid extends Prisma.False
          ? {
                [P in HavingFields]: P extends ByFields
                    ? never
                    : P extends string
                      ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                      : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Prisma.Keys<TArgs>
            ? 'orderBy' extends Prisma.Keys<TArgs>
                ? ByValid extends Prisma.True
                    ? {}
                    : {
                          [P in OrderFields]: P extends ByFields
                              ? never
                              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                      }[OrderFields]
                : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Prisma.Keys<TArgs>
              ? 'orderBy' extends Prisma.Keys<TArgs>
                  ? ByValid extends Prisma.True
                      ? {}
                      : {
                            [P in OrderFields]: P extends ByFields
                                ? never
                                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                        }[OrderFields]
                  : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    TQueryFnData = {} extends InputErrors
        ? Array<
              PickEnumerable<Prisma.VerificationTokenGroupByOutputType, TArgs['by']> & {
                  [P in keyof TArgs & keyof Prisma.VerificationTokenGroupByOutputType]: P extends '_count'
                      ? TArgs[P] extends boolean
                          ? number
                          : Prisma.GetScalarType<TArgs[P], Prisma.VerificationTokenGroupByOutputType[P]>
                      : Prisma.GetScalarType<TArgs[P], Prisma.VerificationTokenGroupByOutputType[P]>;
              }
          >
        : InputErrors,
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args: Prisma.SelectSubset<
        TArgs,
        Prisma.SubsetIntersection<TArgs, Prisma.VerificationTokenGroupByArgs, OrderByArg> & InputErrors
    >,
    options?: Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>(
        'VerificationToken',
        `${endpoint}/verificationToken/groupBy`,
        args,
        options,
        fetch,
    );
}

export function useSuspenseGroupByVerificationToken<
    TArgs extends Prisma.VerificationTokenGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
        Prisma.Extends<'skip', Prisma.Keys<TArgs>>,
        Prisma.Extends<'take', Prisma.Keys<TArgs>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.VerificationTokenGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<TArgs['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
        ? `Error: "by" must not be empty.`
        : HavingValid extends Prisma.False
          ? {
                [P in HavingFields]: P extends ByFields
                    ? never
                    : P extends string
                      ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                      : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Prisma.Keys<TArgs>
            ? 'orderBy' extends Prisma.Keys<TArgs>
                ? ByValid extends Prisma.True
                    ? {}
                    : {
                          [P in OrderFields]: P extends ByFields
                              ? never
                              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                      }[OrderFields]
                : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Prisma.Keys<TArgs>
              ? 'orderBy' extends Prisma.Keys<TArgs>
                  ? ByValid extends Prisma.True
                      ? {}
                      : {
                            [P in OrderFields]: P extends ByFields
                                ? never
                                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                        }[OrderFields]
                  : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    TQueryFnData = {} extends InputErrors
        ? Array<
              PickEnumerable<Prisma.VerificationTokenGroupByOutputType, TArgs['by']> & {
                  [P in keyof TArgs & keyof Prisma.VerificationTokenGroupByOutputType]: P extends '_count'
                      ? TArgs[P] extends boolean
                          ? number
                          : Prisma.GetScalarType<TArgs[P], Prisma.VerificationTokenGroupByOutputType[P]>
                      : Prisma.GetScalarType<TArgs[P], Prisma.VerificationTokenGroupByOutputType[P]>;
              }
          >
        : InputErrors,
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args: Prisma.SelectSubset<
        TArgs,
        Prisma.SubsetIntersection<TArgs, Prisma.VerificationTokenGroupByArgs, OrderByArg> & InputErrors
    >,
    options?: Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>(
        'VerificationToken',
        `${endpoint}/verificationToken/groupBy`,
        args,
        options,
        fetch,
    );
}

export function useCountVerificationToken<
    TArgs extends Prisma.VerificationTokenCountArgs,
    TQueryFnData = TArgs extends { select: any }
        ? TArgs['select'] extends true
            ? number
            : Prisma.GetScalarType<TArgs['select'], Prisma.VerificationTokenCountAggregateOutputType>
        : number,
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args?: Prisma.SelectSubset<TArgs, Prisma.VerificationTokenCountArgs>,
    options?: Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>(
        'VerificationToken',
        `${endpoint}/verificationToken/count`,
        args,
        options,
        fetch,
    );
}

export function useSuspenseCountVerificationToken<
    TArgs extends Prisma.VerificationTokenCountArgs,
    TQueryFnData = TArgs extends { select: any }
        ? TArgs['select'] extends true
            ? number
            : Prisma.GetScalarType<TArgs['select'], Prisma.VerificationTokenCountAggregateOutputType>
        : number,
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args?: Prisma.SelectSubset<TArgs, Prisma.VerificationTokenCountArgs>,
    options?: Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>(
        'VerificationToken',
        `${endpoint}/verificationToken/count`,
        args,
        options,
        fetch,
    );
}
