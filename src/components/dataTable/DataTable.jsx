import React from 'react';
import useAuthStore from '../../stores/use-auth-store';

// Define your Zustand store


const DataTable = () => {
    const { scores } = useAuthStore();

    return (
        <table>
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {scores.map((item, index) => (
                    <tr key={index}>
                        <td>{item.email}</td>
                        <td>{item.score}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;