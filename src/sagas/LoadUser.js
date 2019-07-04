import TravelServiceApi from '';
export const loadUser = () => {
    console.log('loading user');
    return TravelServiceApi.getUser().then(res => res);
}