package com.kitchen.controller;

import com.kitchen.service.KitchenService;
import com.kitchen.vo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class KitchenController {

    @Autowired
    private KitchenService kitchenService;

    /**
     * 消息编辑页面
     * @param data 消息表单
     * @return json
     */
    @PostMapping("/back-kitchen/notify")
    public Map<String, String> notifyWaiter(@RequestParam Map<String, String> data) {
        return kitchenService.postMessage(data);
    }

    /**
     * 获取订单详情
     * @param data 订单详情信息
     * @return json
     */
    @GetMapping("/back-kitchen/detail")
    public JsonResponse<OrderDetail> getDetail(@RequestParam Map<String, String> data) {
        return kitchenService.getOrderDetail(data);
    }

    /**
     * 改变订单菜品烹饪状态
     * @param data data
     * @return response
     */
    @PostMapping("/back-kitchen/detail/status")
    public JsonResponse<Object> setFoodStatus(@RequestParam Map<String, String> data) {
        return kitchenService.setFoodStatus(data);
    }

    /**
     * 获取实时公告
     * @param data 后厨用户 userId
     * @return json
     */
    @GetMapping("/back-kitchen/notice")
    public JsonResponse<NoticeDetail> getNotice(@RequestParam Map<String, String> data) {
        return kitchenService.getNotice(data);
    }

    /**
     * 消息标记为已读
     * @return JsonResponse
     */
    @PostMapping("/back-kitchen/notice/read")
    public JsonResponse<Object> setNoticeRead(@RequestParam Map<String, String> data) {
        return kitchenService.setNoticeRead(data);
    }

    /**
     * 获取所有订单号
     * @return json
     */
    @GetMapping("/back-kitchen/orderIds")
    public JsonResponse<OrderId> getOrderId() {
        return kitchenService.getOrderId();
    }

    /**
     * 获取所有服务员编号
     * @return json
     */
    @GetMapping("/back-kitchen/waiterIds")
    public JsonResponse<WaiterId> getWaiterId() {
        return kitchenService.getWaiterId();
    }

    /**
     * 根据订单号获取服务员编号
     * @return json
     */
    @GetMapping("/back-kitchen/waiterId")
    public JsonResponse<Integer> getWaiterIdByOrderId(@RequestParam Map<String, String> data) {
        return kitchenService.getWaiterIdByOrderId(data);
    }

    /**
     * 后厨通知服务员消息
     * @param data 消息内容
     * @return json
     */
    @PostMapping("/back-kitchen/message")
    public JsonResponse<Object> getMessage(@RequestParam Map<String, String> data) {
        return kitchenService.getMessage(data);
    }

}
