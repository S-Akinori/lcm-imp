import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  name: Scalars['String'];
  posts?: Maybe<CategoryToPostConnection>;
  slug: Scalars['String'];
  uri?: Maybe<Scalars['String']>;
};

export enum CategoryIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type CategoryToPostConnection = {
  __typename?: 'CategoryToPostConnection';
  edges?: Maybe<Array<Maybe<CategoryToPostConnectionEdge>>>;
};

export type CategoryToPostConnectionEdge = {
  __typename?: 'CategoryToPostConnectionEdge';
  node?: Maybe<Post>;
};

export type FeaturedImage = {
  __typename?: 'FeaturedImage';
  sourceUrl: Scalars['String'];
};

export type FeaturedImageConnection = {
  __typename?: 'FeaturedImageConnection';
  node: FeaturedImage;
};

export type MediaItem = {
  __typename?: 'MediaItem';
  sourceUrl: Scalars['String'];
};

export type Menu = {
  __typename?: 'Menu';
  id: Scalars['String'];
  locations?: Maybe<Array<Maybe<MenuLocationEnum>>>;
  menuItems?: Maybe<MenuToMenuItemConnection>;
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type MenuItem = {
  __typename?: 'MenuItem';
  connectedNode?: Maybe<MenuItemToMenuItemLinkableConnectionEdge>;
};

export type MenuItemToMenuItemLinkableConnectionEdge = {
  __typename?: 'MenuItemToMenuItemLinkableConnectionEdge';
  node?: Maybe<Post>;
};

export enum MenuLocationEnum {
  SideNav = 'SIDE_NAV'
}

export enum MenuNodeIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Location = 'LOCATION',
  Name = 'NAME',
  Slug = 'SLUG'
}

export type MenuToMenuItemConnection = {
  __typename?: 'MenuToMenuItemConnection';
  edges?: Maybe<Array<Maybe<MenuToMenuItemConnectionEdge>>>;
};

export type MenuToMenuItemConnectionEdge = {
  __typename?: 'MenuToMenuItemConnectionEdge';
  node?: Maybe<MenuItem>;
};

export type Post = {
  __typename?: 'Post';
  categories?: Maybe<PostToCategoryConnection>;
  content?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  featuredImage?: Maybe<FeaturedImageConnection>;
  id: Scalars['Int'];
  imageUrl?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
};

export enum PostIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type PostReview = {
  __typename?: 'PostReview';
  content?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  featuredImage?: Maybe<FeaturedImageConnection>;
  id: Scalars['Int'];
  imageUrl?: Maybe<Scalars['String']>;
  reviewField: PostReview_Reviewfield;
  slug: Scalars['String'];
  title: Scalars['String'];
};

export enum PostReviewIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type PostReview_Reviewfield = {
  __typename?: 'PostReview_Reviewfield';
  date: Scalars['String'];
  image1: MediaItem;
  image2: MediaItem;
  movieType: Scalars['String'];
  name: Scalars['String'];
  reviewAll: Scalars['String'];
  reviewMovie: Scalars['String'];
  satisficationMovie: Scalars['Int'];
  satisficationShoot: Scalars['Int'];
  videoUrl: Scalars['String'];
};

export type PostToCategoryConnection = {
  __typename?: 'PostToCategoryConnection';
  edges?: Maybe<Array<Maybe<PostToCategoryConnectionEdge>>>;
};

export type PostToCategoryConnectionEdge = {
  __typename?: 'PostToCategoryConnectionEdge';
  node?: Maybe<Category>;
};

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<RootQueryToCategoryConnection>;
  category?: Maybe<Category>;
  menu?: Maybe<Menu>;
  post?: Maybe<Post>;
  postReview?: Maybe<PostReview>;
  postReviews?: Maybe<RootQueryToPostReviewConnection>;
  posts?: Maybe<RootQueryToPostConnection>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<CategoryIdType>;
};


export type QueryMenuArgs = {
  id?: Scalars['ID'];
  idType?: InputMaybe<MenuNodeIdTypeEnum>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<PostIdType>;
};


export type QueryPostReviewArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<PostReviewIdType>;
};


export type QueryPostReviewsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryPostsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToPostConnectionWhereArgs>;
};

export type RootQueryToCategoryConnection = {
  __typename?: 'RootQueryToCategoryConnection';
  edges?: Maybe<Array<Maybe<RootQueryToCategoryConnectionEdge>>>;
};

export type RootQueryToCategoryConnectionEdge = {
  __typename?: 'RootQueryToCategoryConnectionEdge';
  node?: Maybe<Category>;
};

export type RootQueryToPostConnection = {
  __typename?: 'RootQueryToPostConnection';
  edges?: Maybe<Array<Maybe<RootQueryToPostConnectionEdge>>>;
};

export type RootQueryToPostConnectionEdge = {
  __typename?: 'RootQueryToPostConnectionEdge';
  node?: Maybe<Post>;
};

export type RootQueryToPostConnectionWhereArgs = {
  categoryName?: InputMaybe<Scalars['String']>;
};

export type RootQueryToPostReviewConnection = {
  __typename?: 'RootQueryToPostReviewConnection';
  edges?: Maybe<Array<RootQueryToPostReviewConnectionEdge>>;
};

export type RootQueryToPostReviewConnectionEdge = {
  __typename?: 'RootQueryToPostReviewConnectionEdge';
  node: PostReview;
};

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', categories?: { __typename?: 'RootQueryToCategoryConnection', edges?: Array<{ __typename?: 'RootQueryToCategoryConnectionEdge', node?: { __typename?: 'Category', id: number, slug: string, name: string, uri?: string | null } | null } | null> | null } | null };

export type GetCategoryWithPostsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCategoryWithPostsQuery = { __typename?: 'Query', category?: { __typename?: 'Category', id: number, name: string, slug: string, uri?: string | null, posts?: { __typename?: 'CategoryToPostConnection', edges?: Array<{ __typename?: 'CategoryToPostConnectionEdge', node?: { __typename?: 'Post', id: number, slug: string, title: string, excerpt?: string | null, featuredImage?: { __typename?: 'FeaturedImageConnection', node: { __typename?: 'FeaturedImage', sourceUrl: string } } | null } | null } | null> | null } | null } | null };

export type GetPickedOutPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPickedOutPostsQuery = { __typename?: 'Query', menu?: { __typename?: 'Menu', id: string, slug: string, name: string, locations?: Array<MenuLocationEnum | null> | null, menuItems?: { __typename?: 'MenuToMenuItemConnection', edges?: Array<{ __typename?: 'MenuToMenuItemConnectionEdge', node?: { __typename?: 'MenuItem', connectedNode?: { __typename?: 'MenuItemToMenuItemLinkableConnectionEdge', node?: { __typename?: 'Post', id: number, title: string, slug: string, excerpt?: string | null, featuredImage?: { __typename?: 'FeaturedImageConnection', node: { __typename?: 'FeaturedImage', sourceUrl: string } } | null } | null } | null } | null } | null> | null } | null } | null };

export type GetPostQueryVariables = Exact<{
  id: Scalars['ID'];
  idType?: InputMaybe<PostIdType>;
}>;


export type GetPostQuery = { __typename?: 'Query', post?: { __typename?: 'Post', content?: string | null, id: number, title: string, excerpt?: string | null, slug: string, categories?: { __typename?: 'PostToCategoryConnection', edges?: Array<{ __typename?: 'PostToCategoryConnectionEdge', node?: { __typename?: 'Category', id: number, name: string, slug: string } | null } | null> | null } | null, featuredImage?: { __typename?: 'FeaturedImageConnection', node: { __typename?: 'FeaturedImage', sourceUrl: string } } | null } | null };

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = { __typename?: 'Query', posts?: { __typename?: 'RootQueryToPostConnection', edges?: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node?: { __typename?: 'Post', id: number, slug: string, title: string, excerpt?: string | null, date?: string | null, categories?: { __typename?: 'PostToCategoryConnection', edges?: Array<{ __typename?: 'PostToCategoryConnectionEdge', node?: { __typename?: 'Category', id: number, name: string, slug: string } | null } | null> | null } | null, featuredImage?: { __typename?: 'FeaturedImageConnection', node: { __typename?: 'FeaturedImage', sourceUrl: string } } | null } | null } | null> | null } | null };

export type GetReviewPostQueryVariables = Exact<{
  id: Scalars['ID'];
  idType?: InputMaybe<PostReviewIdType>;
}>;


export type GetReviewPostQuery = { __typename?: 'Query', postReview?: { __typename?: 'PostReview', content?: string | null, id: number, title: string, excerpt?: string | null, slug: string, featuredImage?: { __typename?: 'FeaturedImageConnection', node: { __typename?: 'FeaturedImage', sourceUrl: string } } | null, reviewField: { __typename?: 'PostReview_Reviewfield', movieType: string, name: string, date: string, videoUrl: string, satisficationShoot: number, satisficationMovie: number, reviewAll: string, reviewMovie: string, image1: { __typename?: 'MediaItem', sourceUrl: string }, image2: { __typename?: 'MediaItem', sourceUrl: string } } } | null };

export type GetReviewPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetReviewPostsQuery = { __typename?: 'Query', postReviews?: { __typename?: 'RootQueryToPostReviewConnection', edges?: Array<{ __typename?: 'RootQueryToPostReviewConnectionEdge', node: { __typename?: 'PostReview', id: number, slug: string, title: string, excerpt?: string | null, date?: string | null, featuredImage?: { __typename?: 'FeaturedImageConnection', node: { __typename?: 'FeaturedImage', sourceUrl: string } } | null, reviewField: { __typename?: 'PostReview_Reviewfield', movieType: string, name: string, date: string } } }> | null } | null };


export const GetCategoriesDocument = gql`
    query getCategories {
  categories {
    edges {
      node {
        id
        slug
        name
        uri
      }
    }
  }
}
    `;
export const GetCategoryWithPostsDocument = gql`
    query getCategoryWithPosts($id: ID!) {
  category(id: $id, idType: SLUG) {
    id
    name
    slug
    uri
    posts {
      edges {
        node {
          id
          slug
          title
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
}
    `;
export const GetPickedOutPostsDocument = gql`
    query getPickedOutPosts {
  menu(id: "pickedOutPosts", idType: NAME) {
    id
    slug
    name
    locations
    menuItems {
      edges {
        node {
          connectedNode {
            node {
              ... on Post {
                id
                title
                slug
                excerpt
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const GetPostDocument = gql`
    query getPost($id: ID!, $idType: PostIdType = SLUG) {
  post(idType: $idType, id: $id) {
    content
    id
    title
    excerpt
    slug
    categories {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
}
    `;
export const GetPostsDocument = gql`
    query getPosts {
  posts(first: 100) {
    edges {
      node {
        id
        slug
        title
        excerpt
        date
        categories {
          edges {
            node {
              id
              name
              slug
            }
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
}
    `;
export const GetReviewPostDocument = gql`
    query getReviewPost($id: ID!, $idType: PostReviewIdType = SLUG) {
  postReview(idType: $idType, id: $id) {
    content
    id
    title
    excerpt
    slug
    featuredImage {
      node {
        sourceUrl
      }
    }
    reviewField {
      movieType
      name
      date
      videoUrl
      image1 {
        sourceUrl
      }
      image2 {
        sourceUrl
      }
      satisficationShoot
      satisficationMovie
      reviewAll
      reviewMovie
    }
  }
}
    `;
export const GetReviewPostsDocument = gql`
    query getReviewPosts {
  postReviews(first: 100) {
    edges {
      node {
        id
        slug
        title
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        reviewField {
          movieType
          name
          date
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getCategories(variables?: GetCategoriesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCategoriesQuery>(GetCategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategories', 'query');
    },
    getCategoryWithPosts(variables: GetCategoryWithPostsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCategoryWithPostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCategoryWithPostsQuery>(GetCategoryWithPostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategoryWithPosts', 'query');
    },
    getPickedOutPosts(variables?: GetPickedOutPostsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPickedOutPostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPickedOutPostsQuery>(GetPickedOutPostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPickedOutPosts', 'query');
    },
    getPost(variables: GetPostQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPostQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPostQuery>(GetPostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPost', 'query');
    },
    getPosts(variables?: GetPostsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPostsQuery>(GetPostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPosts', 'query');
    },
    getReviewPost(variables: GetReviewPostQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetReviewPostQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetReviewPostQuery>(GetReviewPostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getReviewPost', 'query');
    },
    getReviewPosts(variables?: GetReviewPostsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetReviewPostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetReviewPostsQuery>(GetReviewPostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getReviewPosts', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;