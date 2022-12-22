import {View, Text, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import AppLayout from '../../component/AppLayout';
import ScreenTitle from '../../component/ScreenTitle';
import PeopleCard from '../../component/PeopleCard';
import {routeConstant} from '../../constant/routeContant';
import instance from '../../api/interceptor';
import {PATH} from '../../api/apiPath';

const Home = ({navigation}) => {
  console.log(navigation);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllAbumsData();
    // getUsersData();
  }, []);

  const onCardClick = item => {
    navigation.navigate(routeConstant.GALLERY, {
      item,
    });
  };

  const getAllAbumsData = () => {
    instance
      .get(PATH.ALL_ALBUMS)
      .then(res => {
        if (res && res.length) {
          getUsersWithAlbums(res);
        }
      })
      .catch(err => {});
  };

  const getUsersWithAlbums = albums => {
    instance
      .get(PATH.USER)
      .then(res => {
        if (res && res?.length) {
          // console.log(res, albums);
          albumsCounter(res, albums);
        }
      })
      .catch(() => {});
  };

  const albumsCounter = (users, albums) => {
    users.map((item, index) => {
      const arr = albums.filter(album => {
        return album.userId === item.id;
      });

      console.log(arr.length);
      console.log('hello hello');

      item.totalAlbums = arr.length;
    });

    setUsers([...users]);
  };

  return (
    <AppLayout>
      <ScreenTitle>People</ScreenTitle>
      <ScrollView showsVerticalScrollIndicator={false}>
        {users.map((item, index) => {
          return <PeopleCard item={item} key={index} onPress={onCardClick} />;
        })}
      </ScrollView>
    </AppLayout>
  );
};

export default Home;
