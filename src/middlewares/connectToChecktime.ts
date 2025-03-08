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
        const token = ConnectToCheckTime();
        const { nom, id_poste } = data;

        console.log(token)

        if (token) {
            const response = await axios.post('http://checktime.tech/personnel/api/positions/', {

                position_code: id_poste,
                position_name: nom,

            }, {
                headers: {
                    Authorization: `Token ${token}`
                }
            });

            console.log(response);

        }

        


    } catch (error) {
        console.error('Erreur lors de la connexion à CheckTime:', error);
        return null;
    }
};

