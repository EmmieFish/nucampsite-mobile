import { FlatList } from "react-native";
import { Tile } from "react-native-elements";
import { useSelector } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const DirectoryScreen = ({ navigation }) => {
    const campsites = useSelector((state) => state.campsites)

    const renderDirectoryItem = ({ item: campsite }) => {
        return (
            <Tile
            title={campsite.name}
            onPress={() => navigation.navigate('CampsiteInfo', { campsite })}
            caption={campsite.description}
            featured
            imageSrc={{ uri: baseUrl + campsite.image }}
            />
        );
    };

    return (
        <FlatList
            data={campsites.campsitesArray}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};
export default DirectoryScreen;
