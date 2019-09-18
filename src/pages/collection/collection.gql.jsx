import React from 'react';
import { Query } from 'react-apollo';

import CollectionPage from './collection.component';
import Spinner from '../../components/spinner/spinner.component';

import { GET_COLLECTION_BY_TITLE } from '../../graphql/queries';

const CollectionPageContainer = ({ match }) => (
  <Query
    query={GET_COLLECTION_BY_TITLE}
    variables={{ title: match.params.collectionId }}
  >
    {({ loading, error, data }) => {
      if (loading) return <Spinner />;

      return <CollectionPage collection={data.getCollectionsByTitle} />;
    }}
  </Query>
);

export default CollectionPageContainer;
