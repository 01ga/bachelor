import React from 'react';

/**
 * props = {info: [
 *     {change: "";
 *      ang: "";
 *      react: "";
 *      isMigrationConform:boolean} 
 * ]}
 */
export const MigrationClass = {
    YES: "glyphicon glyphicon-ok green",
    NO: "glyphicon glyphicon-remove rad",
    MAYBE: "glyphicon glyphicon-pencil orange"
}
function MigrationCheck(props) {
    return (
        <section>
            <table className="table">
                <thead>
                    <tr>
                    <th>Änderung</th>
                    <th>AngularJS</th>
                    <th>React</th>
                    <th>Migrationskonform</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.info.map((row, index) => {
                            const active = index%2 === 0 ? "active" : "";
                            let title;
                            switch(row.isMigrationConform) {
                                case MigrationClass.YES:
                                    title = "Migrationkonform";
                                    break;
                                case MigrationClass.MAYBE:
                                    title = "Geringe Aufwand";
                                    break;
                                case MigrationClass.NO:
                                    title = "Direkt nicht migrierbar";
                                    break;
                                default:
                                    throw Error('Undefined case:' + row.isMigrationConform);
                            }
                            return (
                                <tr key={index} className={active}>
                                    <td>{row.change}</td>
                                    <td><pre className="transparent">{row.ang}</pre></td>
                                    <td><pre className="transparent">{row.react}</pre></td>
                                    <td><span title={title} className={row.isMigrationConform} aria-hidden="true"></span></td>
                                </tr>
                            );
                        })
                    }
                    
                </tbody>
            </table>
        </section>
    );
};

export default MigrationCheck;