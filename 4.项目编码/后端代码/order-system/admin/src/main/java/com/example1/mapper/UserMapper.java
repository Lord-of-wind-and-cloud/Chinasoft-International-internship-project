package com.example1.mapper;

import com.example1.entity.User;
import com.example1.entity.UserSales;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
    boolean insert(User user);

    boolean deleteById(Integer id);

    boolean update(User user);

    User selectById(Integer id);
    User selectByEmail(String email);

    List<User> listAll();

    List<User> fuzzySearchByName(String part);

    List<User> listByRole(Integer role);

    List<UserSales> selectTop3Waiter();

    String getImagePathByUserId(Integer userId);

    void updateUserByUserId(String image);

}
