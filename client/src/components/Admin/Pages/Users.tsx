import React, { useState } from 'react'
import Form from '../Partials/Users/Form/Form'
import Table from '../Partials/Users/Table/Table'
import './Users.scss'

interface Props {

}

function Users(props: Props) {
    const [typeForm, setTypeForm] = useState('add')

    const handleChangeTypeForm = (value: string) =>{
        setTypeForm(value)
    }

    return (
        <div className="admin-users-background">
            <Table onChangeTypeForm={handleChangeTypeForm}></Table>
            <Form type={typeForm}></Form>
        </div>
    );
}

export default Users;