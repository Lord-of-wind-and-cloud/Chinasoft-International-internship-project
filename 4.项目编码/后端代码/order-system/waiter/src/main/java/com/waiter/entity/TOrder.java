package com.waiter.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class TOrder {
    private Integer orderId;
    private Integer userId;
    private Integer tableId;
    private Float totalPrice;
    private String memo;
    private Integer status;
    private Date createTime;
    private Date finishTime;
    private Integer numPeople;
}
