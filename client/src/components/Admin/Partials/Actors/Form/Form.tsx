import React, { useState } from 'react'
import './Form.scss'
import $ from 'jquery'

interface Props {
    type: string
}

function Form({type}: Props) {

    //states

    const [image, setImage] = useState('')

    const handleClickToHideAddedForm = (e: React.MouseEvent) => {
        $('.admin-actors-background').css('left', '0%')
    }

    const handleChangeImage = (e: React.ChangeEvent) => {
        const { files }: any = e.target
        console.log(files[0])
        $('.btn-admin-add-actor-image').html(files[0].name)
        setImage(URL.createObjectURL(files[0]))

    }

    return (
        <div className="admin-actor-add-form">
            <i className="fas fa-angle-double-left" onClick={handleClickToHideAddedForm}></i>
            <p className="title-added-actor-form">
                {type === 'add' ? 'Add Actor' : 'Update Actor'}
            </p>
            <form action="" className="added-actor-form">
                <div className="content-added-actor-form">
                    <div className="col">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Title:</th>
                                    <td><input type="text" /></td>
                                </tr>
                                <tr>
                                    <th>Year:</th>
                                    <td><input type="number" name="" id="" /></td>
                                </tr>
                                <tr>
                                    <th>Director: </th>
                                    <td><input type="text" name="" id="" /></td>
                                </tr>
                                <tr>
                                    <th>Actor: </th>
                                    <td><input type="text" /></td>
                                </tr>
                                <tr>
                                    <th>Timing: </th>
                                    <td><input type="number" name="" id="" /></td>
                                </tr>
                                <tr>
                                    <th>Category: </th>
                                    <td><input type="number" name="" id="" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col">
                        <table className="admin-added-table-right">
                            <tbody>
                                <tr className="admin-description-add-actor">
                                    <th>Description:</th>
                                    <td><textarea name="" id="" ></textarea></td>
                                </tr>
                                <tr className="admin-added-video">
                                    <th>Video:</th>
                                    <td className="admin-added-file">
                                        <button><i className="fas fa-cloud-upload-alt"></i> Add Video</button>
                                        <input type="file" name="" id="" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Image:</th>
                                    <td className="admin-added-file">
                                        <button className="btn btn-admin-add-actor-image"><i className="fas fa-cloud-upload-alt"></i> Add Image</button>
                                        <input type="file" name="" id="" accept='image/*' onChange={handleChangeImage}/>
                                    </td>
                                </tr>
                                
                                <tr className="review-added-actor-image">
                                    <th></th>
                                    <td >
                                        <img src={image} alt="" className="image"/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="admin-added-actor-btn-group">
                    <input type="submit" value="Add" />
                    <input type="button" className="btn btn-clear"value="Clear" />
                </div>
            </form>
        </div>
    );
}

export default Form;