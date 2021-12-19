import React, { useState } from 'react'

import './Directors.scss'
import Form from '../Partials/Directors/Form/Form'
import Table from '../Partials/Directors/Table/Table'

interface Props {

}

function Directors(props: Props) {
    const [typeForm, setTypeForm] = useState('add')

    const handleChangeTypeForm = (value: string) =>{
        setTypeForm(value)
    }

    return (
        <div className="admin-directors-background">
            <Table onChangeTypeForm={handleChangeTypeForm}></Table>
            <Form type={typeForm}></Form>
        </div>
    )
}

export default Directors