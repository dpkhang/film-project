import React, { useState } from 'react'
import './Films.scss'
import Table from '../Partials/Films/Table/Table'
import Form from '../Partials/Films/Form/Form'
interface Props {

}

function Films(props: Props) {

    //state
    const [typeForm, setTypeForm] = useState('add')

    const handleChangeTypeForm = (value: string) =>{
        setTypeForm(value)
    }

    return (
        <div className="admin-films-background">
            <Table onChangeTypeForm={handleChangeTypeForm}></Table>
            <Form type={typeForm}></Form>
        </div>
    );
}

export default Films;