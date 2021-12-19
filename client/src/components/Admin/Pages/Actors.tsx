import React, { useState } from 'react'
import './Actors.scss'
import Form from '../Partials/Actors/Form/Form'
import Table from '../Partials/Actors/Table/Table'

interface Props {

}

function Actors(props: Props) {
    const [typeForm, setTypeForm] = useState('add')

    const handleChangeTypeForm = (value: string) =>{
        setTypeForm(value)
    }

    return (
        <div className="admin-actors-background">
            <Table onChangeTypeForm={handleChangeTypeForm}></Table>
            <Form type={typeForm}></Form>
        </div>
    );
}

export default Actors