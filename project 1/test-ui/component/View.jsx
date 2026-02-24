import React from 'react'

const View = () => {
 
    return (
        <div className="row mt-3">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
                <table className='table'>
                    <thead className='table table-dark'>
                        <tr>
                            <th>Sr.No</th>
                            <th>FullName</th>
                            <th>Email</th>
                            <th>MobileNumber</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
            <div className="col-sm-2"></div>
        </div>
    )
}

export default View

