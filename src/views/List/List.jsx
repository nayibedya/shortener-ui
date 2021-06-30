import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Skeleton } from 'antd';
import { actions as ListActions } from '../../data/List'
import Table from '../../components/Table'

function List(props) {

    useEffect(() => {
        async function callApi() {
            await props.dispatch(ListActions.fetchListtUrl());
        }
        callApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        props.loading ? <Skeleton /> : <Table data={props.data} />
    )
}
const mapStateToProps = (state) => {

    return {
        loading: state.List.loading,
        data: state.List.tableData,
    }
}

export default connect(mapStateToProps)(List);