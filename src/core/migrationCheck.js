import React from 'react';

function MigrationCheck(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                <th>Änderung</th>
                <th>Migrationskonform</th>
                </tr>
            </thead>
            <tbody>
                <tr className="active">
                <td>Column content</td>
                <td><span className="glyphicon glyphicon-ok" aria-hidden="true" style={{color:'green'}}></span></td>
                </tr>
                <tr>
                <td>Column content</td>
                <td><span className="glyphicon glyphicon-remove" aria-hidden="true" style={{color:'red'}}></span></td>
                </tr>
            </tbody>
        </table>
    );
};

export default MigrationCheck;