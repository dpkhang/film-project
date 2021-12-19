import React, { useState } from 'react'
import Form from '../Partials/Categories/Form/Form';
import Table from '../Partials/Categories/Table/Table';
import './Categories.scss'

interface Props {

}

function Categories(props: Props) {

    const [typeForm, setTypeForm] = useState('add')

    const handleChangeTypeForm = (value: string) =>{
        setTypeForm(value)
    }

    return (
        <div className="admin-categories-background">
            <Table onChangeTypeForm={handleChangeTypeForm}></Table>
            <Form type={typeForm}></Form>
        </div>
    );
}

export default Categories;