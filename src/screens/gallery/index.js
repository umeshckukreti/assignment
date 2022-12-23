import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AppLayout from '../../component/AppLayout';
import ScreenTitle from '../../component/ScreenTitle';
import AlbumCard from '../../component/AlbumCard';
import ViewImageModal from '../../component/ViewImageModal';
import ImageCard from '../../component/ImageCard';
import instance from '../../api/interceptor';
import {PATH} from '../../api/apiPath';

const Gallery = ({route}) => {
  const [toggel, setToggel] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [albumsData, setAlbumsData] = useState({data: [], loading: false});
  const [albumsDetails, setAlbumsDetails] = useState({
    data: [],
    loading: false,
  });
  const [openImage, setOpenImage] = useState('');
  const [openGallery, setOpenGallery] = useState({});

  useEffect(() => {
    getAlbums();
  }, []);

  const onAlbumClick = url => {
    console.log('url', url);
    getAlbumsDetails(url);
    setToggel(!toggel);
  };

  const getAlbumsDetails = albumId => {
    setOpenGallery(albumId);
    setAlbumsDetails({data: [], loading: true});

    const url = `${PATH.USER_IMAGES}${albumId.id}`;
    instance
      .get(url)
      .then(res => {
        if (res && res.length) {
          setAlbumsDetails({data: [...res], loading: false});
        }
      })
      .catch(err => {
        setAlbumsDetails({data: [], loading: false});
      });
  };

  const getAlbums = () => {
    setAlbumsData({data: [], loading: true});
    const url = `${PATH.USER_ALBUMS}${route?.params?.item?.id}`;
    console.log(url);
    instance
      .get(url)
      .then(res => {
        setAlbumsData({data: [...res] ?? [], loading: false});
      })
      .catch(err => {
        setAlbumsData({data: [], loading: false});
      });
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const onImageClick = url => {
    setOpenImage(url);
    setModalVisible(true);
  };

  return (
    <AppLayout ps={true}>
      <ScreenTitle>Albums</ScreenTitle>
      <ViewImageModal
        modalVisible={modalVisible}
        closeModal={closeModal}
        openImage={openImage}
      />

      {albumsData.loading ? (
        <ActivityIndicator />
      ) : !toggel ? (
        <FlatList
          data={albumsData.data ?? []}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={(item, index) => {
            return (
              <AlbumCard album={item} key={index} onPress={onAlbumClick} />
            );
          }}
        />
      ) : (
        <View style={{flex: 1}}>
          <View style={styles.container}>
            <View style={styles.sectionOne}>
              <FlatList
                data={albumsData.data}
                showsVerticalScrollIndicator={false}
                renderItem={(item, index) => {
                  return (
                    <AlbumCard
                      album={item}
                      sm={true}
                      key={index}
                      onPress={getAlbumsDetails}
                    />
                  );
                }}
              />
            </View>
            <View style={styles.sectionTwo}>
              <Text numberOfLines={1} style={styles.albumTitle}>
                {openGallery.title}
              </Text>
              {albumsDetails.loading ? (
                <View style={styles.center}>
                  <ActivityIndicator />
                </View>
              ) : (
                <FlatList
                  data={albumsDetails.data}
                  numColumns={2}
                  showsVerticalScrollIndicator={false}
                  renderItem={(item, index) => {
                    return (
                      <ImageCard
                        photos={item}
                        imgOnly={true}
                        key={index}
                        onPress={onImageClick}
                      />
                    );
                  }}
                />
              )}
            </View>
          </View>
        </View>
      )}
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sectionOne: {
    flex: 1,
    paddingRight: 8,
    borderRightWidth: 1.5,
    borderColor: '#dedede',
  },
  sectionTwo: {
    flex: 2.5,
    paddingLeft: 8,
  },
  albumTitle: {
    fontSize: 20,
    color: '#000',
    fontWeight: '700',
    marginBottom: 8,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Gallery;
