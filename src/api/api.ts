const host = 'https://fathomless-sea-83266.herokuapp.com'

export const APIDate = {
    async postAllData({name, date, email, phone, message}: {name: string, date: string, email: string, phone: string, message: string}) {
        try {
          const rawResponse = await fetch(`${host}`, {
            method: 'POST',
            });
          console.log(rawResponse);
          if (rawResponse.status === 200) {
            const result = await rawResponse.json();
            return result;
          }
          console.log('!!!Errors' + rawResponse);
        } catch (error) {
          console.log(error);
        }
      }
}