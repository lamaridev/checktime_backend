import axios from 'axios';

export const ConnectToCheckTime = async (): Promise<any> => {
    try {
        const response = await axios.post('http://checktime.tech/api-token-auth/', {
            username: 'USERCHECKTIME',
            password: 'USERCHECKTIME@25'
        });

        const { token }: { token: string } = response.data;

        return token;

    } catch (error) {
        console.error('Erreur lors de la connexion à CheckTime:', error);
        return null;
    }
};


export const InsertPoste = async (data: any): Promise<any> => {
    try {
        const token = await ConnectToCheckTime();
        const { nom, code } = data;
        let isDone;
        if (token) {
            const response = await axios.post('http://checktime.tech/personnel/api/positions/', {

                position_code: code,
                position_name: nom,

            }, {
                headers: {
                    Authorization: `Token ${token}`
                }
            });

            const { status } = response;

            if (status === 201) {
                isDone = true;
            } else {
                isDone = false
            }

        }


        return isDone



    } catch (error) {
        console.error('Erreur lors de la connexion à CheckTime:', error);
        return null;
    }
};

export const InsertDepartement = async (data: any): Promise<any> => {
    try {
        const token = await ConnectToCheckTime();
        const { nom, code } = data;
        let isDone;
        if (token) {
            const response = await axios.post('http://checktime.tech/personnel/api/departments/', {
                dept_code: code,
                dept_name: nom
            }, {
                headers: {
                    Authorization: `Token ${token}`
                }
            });

            const { status } = response;

            if (status === 201) {
                isDone = true;
            } else {
                isDone = false
            }

        }


        return isDone



    } catch (error) {
        console.error('Erreur lors de la connexion à CheckTime:', error);
        return null;
    }
};