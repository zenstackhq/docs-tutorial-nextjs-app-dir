/* eslint-disable */
const metadata = {
    fields: {
        post: {
            id: {
                name: 'id',
                type: 'Int',
                isId: true,
                attributes: [{ name: '@default', args: [] }],
                isAutoIncrement: true,
            },
            name: {
                name: 'name',
                type: 'String',
            },
            createdAt: {
                name: 'createdAt',
                type: 'DateTime',
                attributes: [{ name: '@default', args: [] }],
            },
            updatedAt: {
                name: 'updatedAt',
                type: 'DateTime',
                attributes: [{ name: '@updatedAt', args: [] }],
            },
            published: {
                name: 'published',
                type: 'Boolean',
                attributes: [{ name: '@default', args: [{ value: false }] }],
            },
            createdBy: {
                name: 'createdBy',
                type: 'User',
                isDataModel: true,
                backLink: 'posts',
                isRelationOwner: true,
                foreignKeyMapping: { id: 'createdById' },
            },
            createdById: {
                name: 'createdById',
                type: 'String',
                isForeignKey: true,
            },
        },
        account: {
            id: {
                name: 'id',
                type: 'String',
                isId: true,
                attributes: [{ name: '@default', args: [] }],
            },
            userId: {
                name: 'userId',
                type: 'String',
                isForeignKey: true,
            },
            type: {
                name: 'type',
                type: 'String',
            },
            provider: {
                name: 'provider',
                type: 'String',
            },
            providerAccountId: {
                name: 'providerAccountId',
                type: 'String',
            },
            refresh_token: {
                name: 'refresh_token',
                type: 'String',
                isOptional: true,
            },
            access_token: {
                name: 'access_token',
                type: 'String',
                isOptional: true,
            },
            expires_at: {
                name: 'expires_at',
                type: 'Int',
                isOptional: true,
            },
            token_type: {
                name: 'token_type',
                type: 'String',
                isOptional: true,
            },
            scope: {
                name: 'scope',
                type: 'String',
                isOptional: true,
            },
            id_token: {
                name: 'id_token',
                type: 'String',
                isOptional: true,
            },
            session_state: {
                name: 'session_state',
                type: 'String',
                isOptional: true,
            },
            user: {
                name: 'user',
                type: 'User',
                isDataModel: true,
                backLink: 'accounts',
                isRelationOwner: true,
                foreignKeyMapping: { id: 'userId' },
            },
        },
        session: {
            id: {
                name: 'id',
                type: 'String',
                isId: true,
                attributes: [{ name: '@default', args: [] }],
            },
            sessionToken: {
                name: 'sessionToken',
                type: 'String',
            },
            userId: {
                name: 'userId',
                type: 'String',
                isForeignKey: true,
            },
            expires: {
                name: 'expires',
                type: 'DateTime',
            },
            user: {
                name: 'user',
                type: 'User',
                isDataModel: true,
                backLink: 'sessions',
                isRelationOwner: true,
                foreignKeyMapping: { id: 'userId' },
            },
        },
        user: {
            id: {
                name: 'id',
                type: 'String',
                isId: true,
                attributes: [{ name: '@default', args: [] }],
            },
            name: {
                name: 'name',
                type: 'String',
                isOptional: true,
            },
            email: {
                name: 'email',
                type: 'String',
                isOptional: true,
            },
            emailVerified: {
                name: 'emailVerified',
                type: 'DateTime',
                isOptional: true,
            },
            password: {
                name: 'password',
                type: 'String',
            },
            image: {
                name: 'image',
                type: 'String',
                isOptional: true,
            },
            accounts: {
                name: 'accounts',
                type: 'Account',
                isDataModel: true,
                isArray: true,
                backLink: 'user',
            },
            sessions: {
                name: 'sessions',
                type: 'Session',
                isDataModel: true,
                isArray: true,
                backLink: 'user',
            },
            posts: {
                name: 'posts',
                type: 'Post',
                isDataModel: true,
                isArray: true,
                backLink: 'createdBy',
            },
        },
        verificationToken: {
            identifier: {
                name: 'identifier',
                type: 'String',
            },
            token: {
                name: 'token',
                type: 'String',
                isId: true,
            },
            expires: {
                name: 'expires',
                type: 'DateTime',
            },
        },
    },
    uniqueConstraints: {
        post: {
            id: {
                name: 'id',
                fields: ['id'],
            },
        },
        account: {
            provider_providerAccountId: {
                name: 'provider_providerAccountId',
                fields: ['provider', 'providerAccountId'],
            },
            id: {
                name: 'id',
                fields: ['id'],
            },
        },
        session: {
            id: {
                name: 'id',
                fields: ['id'],
            },
            sessionToken: {
                name: 'sessionToken',
                fields: ['sessionToken'],
            },
        },
        user: {
            id: {
                name: 'id',
                fields: ['id'],
            },
            email: {
                name: 'email',
                fields: ['email'],
            },
        },
        verificationToken: {
            identifier_token: {
                name: 'identifier_token',
                fields: ['identifier', 'token'],
            },
            token: {
                name: 'token',
                fields: ['token'],
            },
        },
    },
    deleteCascade: {
        user: ['Account', 'Session'],
    },
    authModel: 'User',
};
export default metadata;
