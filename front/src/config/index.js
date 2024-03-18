/**
 * 环境配置封装
 */
// 获取当前环境类型, 如果没有设置, 默认生产环境, 通常prod生产, dev开发
const env = import.meta.env.MODE === "development" ? "dev" : "prod";
// 定义相关配置
const EnvConfig = {
	// 开发环境
	dev: {
		baseApi: "https://managerback.goel4.cloud",
		mockApi: "https://dev.usemock.com/65d9ab7ac87ce4342e149e85",
	},
	// 生产环境
	prod: {
		baseApi: "https://managerback.goel4.cloud",
	},
};

export default {
	// 当前环境为开发环境
	env: env,
	// 是否需要mock接口(临时用的测试接口, 如果后端的正式接口没有开发好, 前端可以先用测试接口, 和正式接口很像, 只是数据都是测试数据)
	mock: false,
	// 配置命名空间
	namespace: "manager",
	// 接口调用地址, 解构即可
	...EnvConfig[env],
};
