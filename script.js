/**
 * 简排笔记 - 小红书一键排版工具
 * script.js - 所有交互逻辑（含会员管理系统）
 */

// ===================================
// 模板数据 - 20套精细模板
// ===================================
const templates = [
    {
        id: 1,
        name: '爆款种草🔥',
        category: 'recommend',
        content: '姐妹们！这个真的绝绝子！\n\n💖 用了一次就疯狂爱上，效果太惊艳了！\n\n✅ 必入理由：\n1️⃣ 超级好用，谁用谁香\n2️⃣ 性价比超高，学生党也能冲\n3️⃣ 颜值在线，拍照巨好看\n4️⃣ 亲测有效，回购N次\n\n📌 真心建议大家试试，用过就知道有多棒！\n\n#种草 #好物分享 #必入清单 #无限回购'
    },
    {
        id: 2,
        name: '宝藏好物推荐🎁',
        category: 'recommend',
        content: '🎁 今天分享一个私藏宝藏好物！\n\n🌟 真的是相见恨晚，强烈安利给每一个人！\n\n🌸 真实使用感受：\n• 效果太绝了吧，一整个爱住\n• 已经无限回购了\n• 用过的姐妹都来感谢我\n• 谁用谁知道好！\n\n❤️ 相信我，入手绝对不亏，赶紧冲！\n\n#好物推荐 #安利 #宝藏好物 #好物分享'
    },
    {
        id: 3,
        name: '新手友好推荐',
        category: 'recommend',
        content: '✨ 新手小白必入！\n\n👋 作为一个新手，这个真的太友好了！\n\n💡 为什么推荐：\n1. 操作简单，一看就会\n2. 入门首选，零门槛\n3. 性价比高，不心疼\n4. 效果还特别好\n\n📝 亲测体验：真的太适合新手了！\n\n#新手推荐 #入门必看 #好物分享 #种草'
    },
    {
        id: 4,
        name: '平价替代种草',
        category: 'recommend',
        content: '💰 挖到宝了！这个平价替代绝了！\n\n🆚 效果完全不输大牌，但价格只要零头！\n\n✅ 对比测评：\n• 效果：和大牌几乎一样\n• 价格：只要三分之一\n• 使用感：完全不踩雷\n• 性价比：直接拉满！\n\n🌟 学生党、打工人都可以闭眼入！\n\n#平价替代 #学生党好物 #性价比 #种草'
    },
    {
        id: 5,
        name: '限时优惠种草',
        category: 'recommend',
        content: '⏰ 姐妹们！这个优惠太划算了！\n\n🔥 限时折扣，错过等一年！\n\n💰 优惠信息：\n• 原价：XXX元\n• 现价：XXX元\n• 优惠：立省XXX元\n• 时间：截止到XX号\n\n🛒 这个价格真的太香了，赶紧囤！\n\n#限时优惠 #薅羊毛 #折扣 #好物分享'
    },
    {
        id: 6,
        name: '深度测评📊',
        category: 'review',
        content: '📊 全网最详细测评来啦！\n\n🔍 花了整整一周时间，给大家测这款产品\n\n📝 测评维度：\n1️⃣ 外观设计：⭐⭐⭐⭐⭐（颜值太高了）\n2️⃣ 功能体验：⭐⭐⭐⭐（够用且实用）\n3️⃣ 使用感受：⭐⭐⭐⭐⭐（超级好用）\n4️⃣ 性价比：⭐⭐⭐⭐⭐（太划算了）\n5️⃣ 耐用性：⭐⭐⭐⭐（质量不错）\n\n💡 总结：整体非常推荐，值得入手！\n\n#测评 #好物测评 #真实测评 #深度测评'
    },
    {
        id: 7,
        name: '对比测评🆚',
        category: 'review',
        content: '🆚 两款热门产品对比测评来了！\n\n📌 今天全方位对比A款和B款\n\n📊 A款测评：\n✅ 优点：价格便宜、性价比高\n❌ 缺点：功能简单、质感一般\n🎯 适合：预算有限、入门使用\n\n📊 B款测评：\n✅ 优点：功能强大、质感好\n❌ 缺点：价格偏高\n🎯 适合：预算充足、追求品质\n\n💡 总结：根据自己需求选择，适合自己的最好！\n\n#对比测评 #选购指南 #产品测评 #干货'
    },
    {
        id: 8,
        name: '红黑榜测评',
        category: 'review',
        content: '📋 红黑榜来了！哪些值得买？\n\n✅ 红榜（推荐）：\n1️⃣ XXX - 超级好用，必入！\n2️⃣ XXX - 性价比高，推荐！\n3️⃣ XXX - 惊喜满满，安利！\n\n❌ 黑榜（不推荐）：\n1️⃣ XXX - 踩雷了，别买\n2️⃣ XXX - 一般般，不推荐\n3️⃣ XXX - 不值得，浪费钱\n\n📌 建议收藏，购物前先看！\n\n#红黑榜 #测评 #避坑 #好物分享'
    },
    {
        id: 9,
        name: '真实体验测评',
        category: 'review',
        content: '💬 真实使用体验分享！\n\n📅 用了整整一个月，来说说感受\n\n✨ 刚用时：感觉一般般\n💫 一周后：有点好用了\n🌟 一个月后：彻底爱上了！\n\n📝 具体感受：\n• 效果：越用越好\n• 使用感：越来越顺手\n• 满意度：五颗星！\n\n🎯 总结：值得长期使用！\n\n#真实测评 #体验分享 #好物 #测评'
    },
    {
        id: 10,
        name: '成分党测评',
        category: 'review',
        content: '🔬 成分党来测评了！\n\n📋 成分分析：\n• XXX：安全有效，核心成分\n• XXX：天然温和，不刺激\n• XXX：抗氧化，效果好\n• 无有害添加，安心用\n\n💡 功效实测：\n1️⃣ 保湿：⭐⭐⭐⭐⭐\n2️⃣ 提亮：⭐⭐⭐⭐\n3️⃣ 维稳：⭐⭐⭐⭐⭐\n\n🎯 总结：成分党放心冲！\n\n#成分党 #测评 #好物 #安全有效'
    },
    {
        id: 11,
        name: '干货教程📚',
        category: 'tips',
        content: '📚 保姆级干货教程！建议收藏！\n\n🎯 今天手把手教大家XXX\n\n📝 详细步骤：\n1️⃣ 准备工作：先把XX准备好\n2️⃣ 第一步：按照XX操作\n3️⃣ 第二步：接着做XX\n4️⃣ 第三步：最后做XX\n5️⃣ 完成：搞定啦！\n\n💡 小技巧：\n• 记得要XXX\n• 千万不要XXX\n• 这样做效果会更好\n\n❤️ 学会了记得点赞收藏哦！\n\n#干货 #教程 #知识分享 #保姆级教程'
    },
    {
        id: 12,
        name: '经验分享💡',
        category: 'tips',
        content: '💡 过来人手把手经验分享！\n\n📌 踩过无数坑后总结的心得\n\n✨ 关键要点：\n1️⃣ 一定要XXX（这个很重要！）\n2️⃣ 千万不要XXX（血的教训）\n3️⃣ 建议大家XXX（亲测有效）\n4️⃣ 最好能够XXX（事半功倍）\n5️⃣ 如果能XXX就更好了\n\n⚠️ 避坑提醒：这些事情别做！\n\n💪 希望对你们有帮助，少走弯路！\n\n#经验分享 #干货 #避坑指南 #过来人经验'
    },
    {
        id: 13,
        name: '清单整理📋',
        category: 'tips',
        content: '📋 超全清单整理！建议收藏！\n\n✅ 必做清单：\n1. XXX（第一件事就做这个）\n2. XXX（这个也很重要）\n3. XXX（记得要做）\n4. XXX（做好了效果翻倍）\n\n❌ 避坑清单：\n1. XXX（千万别做！）\n2. XXX（这个是坑）\n3. XXX（别浪费时间）\n\n⭐ 加分项：\n• XXX（做了会更好）\n• XXX（有惊喜）\n\n📌 建议收藏备用！\n\n#清单 #整理 #干货 #必备清单'
    },
    {
        id: 14,
        name: '时间管理干货',
        category: 'tips',
        content: '⏰ 高效时间管理方法分享！\n\n💪 告别拖延症，提高效率！\n\n📝 我的方法：\n1️⃣ 列清单：早上先列今日待办\n2️⃣ 分优先级：按重要紧急排序\n3️⃣ 专注做：一次只做一件事\n4️⃣ 休息：每小时休息10分钟\n5️⃣ 复盘：晚上总结今天\n\n💡 小技巧：\n• 用XX辅助管理\n• 设置提醒防遗忘\n• 定期调整计划\n\n✨ 坚持下去，你会看到变化！\n\n#时间管理 #效率 #干货 #自律'
    },
    {
        id: 15,
        name: '省钱攻略干货',
        category: 'tips',
        content: '💰 省钱攻略来了！学生党打工人必看！\n\n📌 亲测有效的省钱方法\n\n💡 省钱技巧：\n1️⃣ 购物前先领券\n2️⃣ 等大促再入手\n3️⃣ 买前先比价\n4️⃣ 刚需才买，不囤货\n5️⃣ 闲置可以转手\n\n✅ 省钱小工具分享：\n• XXX：比价用\n• XXX：领券用\n• XXX：优惠信息\n\n🌟 既省钱又不降低生活品质！\n\n#省钱攻略 #省钱小技巧 #干货 #省钱'
    },
    {
        id: 16,
        name: '日常plog🌈',
        category: 'daily',
        content: '🌈 今日份美好分享！\n\n📸 今天也是开心的一天～\n\n✨ 今日小确幸：\n• 早上起床天气很好\n• 喝了一杯超好喝的咖啡\n• 工作/学习效率超高\n• 收到了朋友的小礼物\n• 晚上吃了好吃的\n\n💭 今日感悟：\n简单的生活也可以很美好！\n\n#日常 #plog #生活碎片 #记录生活'
    },
    {
        id: 17,
        name: '周末日常',
        category: 'daily',
        content: '🎉 美好的周末开始啦！\n\n📅 周末安排：\n☀️ 上午：睡个懒觉，好好休息\n🍱 中午：和朋友约饭，聊聊天\n🛍️ 下午：逛逛街，或者看看电影\n🌙 晚上：窝在家里追剧，放松心情\n\n💫 周末就要好好放松，充充电！\n\n📌 下周也要继续加油呀！\n\n#周末 #日常 #周末日常 #放松'
    },
    {
        id: 18,
        name: '美食分享',
        category: 'daily',
        content: '🍜 今天吃了超好吃的！\n\n😋 美食分享来了！\n\n📝 今日美食：\n• 早餐：XXX（好吃！）\n• 午餐：XXX（绝绝子）\n• 下午茶：XXX（必点！）\n• 晚餐：XXX（满足～）\n\n✨ 推荐指数：⭐⭐⭐⭐⭐\n\n📍 地址放评论区啦！\n\n#美食 #美食分享 #吃什么 #美食推荐'
    },
    {
        id: 19,
        name: '打卡分享',
        category: 'daily',
        content: '✨ 打卡成功！\n\n📍 今天打卡了XXX\n\n📸 拍照太好看了！随便拍都出片\n\n💡 打卡攻略：\n1️⃣ 最佳时间：XX点去人少\n2️⃣ 拍照位置：这里角度最好\n3️⃣ 穿搭建议：穿XX颜色好看\n4️⃣ 预约方式：提前预约哦\n\n🌟 强烈推荐，值得一去！\n\n#打卡 #探店 #网红打卡 #推荐'
    },
    {
        id: 20,
        name: '自律打卡',
        category: 'daily',
        content: '💪 自律打卡第XX天！\n\n📊 今日完成：\n✅ 早起7:00\n✅ 阅读30分钟\n✅ 运动45分钟\n✅ 喝水8杯\n✅ 学习/工作按时完成\n\n💭 今日感想：\n坚持真的会有变化，继续加油！\n\n📌 明天也要继续努力呀！\n\n#自律 #打卡 #自律打卡 #加油'
    }
];

// ===================================
// 会员管理系统
// ===================================
const MEMBER_STORAGE_KEY = 'xiaohongshu_member_list';

// 获取会员列表
function getMemberList() {
    try {
        const list = localStorage.getItem(MEMBER_STORAGE_KEY);
        return list ? JSON.parse(list) : [];
    } catch (e) {
        return [];
    }
}

// 保存会员列表
function saveMemberList(list) {
    localStorage.setItem(MEMBER_STORAGE_KEY, JSON.stringify(list));
}

// 添加会员
function addMember(phone, type) {
    const list = getMemberList();
    const now = new Date();
    
    // 检查是否已存在
    const existingIndex = list.findIndex(m => m.phone === phone);
    if (existingIndex !== -1) {
        list[existingIndex].type = type;
        list[existingIndex].updatedAt = now.toISOString();
    } else {
        list.push({
            phone: phone,
            type: type,
            createdAt: now.toISOString(),
            updatedAt: now.toISOString()
        });
    }
    
    saveMemberList(list);
    renderMemberList();
}

// 检查是否是会员
function isMember(phone) {
    const list = getMemberList();
    const member = list.find(m => m.phone === phone);
    if (!member) return false;
    
    // 终身卡永久有效
    if (member.type === 'lifetime') {
        return true;
    }
    
    // 月卡检查有效期（30天）
    if (member.type === 'month') {
        const createdAt = new Date(member.createdAt);
        const now = new Date();
        const diffDays = (now - createdAt) / (1000 * 60 * 60 * 24);
        return diffDays < 30;
    }
    
    return false;
}

// 渲染会员列表
function renderMemberList() {
    const list = getMemberList();
    const listEl = document.getElementById('memberList');
    
    if (!listEl) return;
    
    if (list.length === 0) {
        listEl.innerHTML = '<p class="text-gray-400">暂无会员</p>';
        return;
    }
    
    const html = list.map(member => {
        const typeText = member.type === 'lifetime' ? '终身卡' : '月卡';
        const typeColor = member.type === 'lifetime' ? 'text-xhs-red' : 'text-blue-500';
        const createdAt = new Date(member.createdAt).toLocaleDateString('zh-CN');
        
        return `
            <div class="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                <div>
                    <span class="font-medium">${member.phone}</span>
                    <span class="${typeColor} text-xs ml-2">${typeText}</span>
                </div>
                <div class="text-xs text-gray-400">${createdAt}</div>
            </div>
        `;
    }).join('');
    
    listEl.innerHTML = html;
}

// ===================================
// 使用次数管理
// ===================================
const USAGE_STORAGE_KEY = 'xiaohongshu_usage_data';
const MAX_FREE_USES = 3;

let usageData = {
    date: '',
    count: 0,
    isVip: false,
    phone: null
};

// 加载使用数据
function loadUsageData() {
    try {
        const saved = localStorage.getItem(USAGE_STORAGE_KEY);
        if (saved) {
            usageData = JSON.parse(saved);
        }
        
        // 检查是否新的一天
        const today = new Date().toDateString();
        if (usageData.date !== today) {
            usageData.date = today;
            usageData.count = 0;
        }
        
        // 检查会员状态
        if (usageData.phone && isMember(usageData.phone)) {
            usageData.isVip = true;
        }
        
        saveUsageData();
    } catch (e) {
        usageData = {
            date: new Date().toDateString(),
            count: 0,
            isVip: false,
            phone: null
        };
    }
}

// 保存使用数据
function saveUsageData() {
    localStorage.setItem(USAGE_STORAGE_KEY, JSON.stringify(usageData));
}

// 获取剩余次数
function getRemainingUses() {
    if (usageData.isVip) return Infinity;
    return Math.max(0, MAX_FREE_USES - usageData.count);
}

// 检查是否可以使用
function canUse() {
    return usageData.isVip || usageData.count < MAX_FREE_USES;
}

// 增加使用次数
function incrementUsage() {
    if (!usageData.isVip) {
        usageData.count++;
    }
    saveUsageData();
    updateUsageDisplay();
}

// 验证会员手机号
function verifyMember(phone) {
    if (!phone || phone.length !== 11) {
        showToast('请输入正确的手机号');
        return false;
    }
    
    if (isMember(phone)) {
        usageData.isVip = true;
        usageData.phone = phone;
        saveUsageData();
        updateUsageDisplay();
        closePayModal();
        showToast('🎉 会员验证成功！');
        return true;
    } else {
        showToast('该手机号未注册会员，请先支付');
        return false;
    }
}

// 更新使用次数显示
function updateUsageDisplay() {
    const remaining = getRemainingUses();

    // 更新桌面端
    const usageInfoEl = document.getElementById('usageInfo');
    const remainingEl = document.getElementById('remainingCount');
    const unlockBtnEl = document.getElementById('unlockBtn');
    const resetBtnEl = document.getElementById('resetVipBtn');
    
    if (usageData.isVip) {
        if (usageInfoEl) {
            usageInfoEl.innerHTML = '<span class="text-yellow-500 font-bold">🌟 VIP会员 - 无限使用</span>';
        }
        if (unlockBtnEl) {
            unlockBtnEl.style.display = 'none';
        }
        if (resetBtnEl) {
            resetBtnEl.classList.remove('hidden');
        }
        if (remainingEl) {
            remainingEl.textContent = '∞';
        }
    } else {
        if (usageInfoEl) {
            usageInfoEl.innerHTML = '<span class="text-gray-600">今日剩余：</span><span id="remainingCount" class="text-xhs-red font-bold text-lg">' + remaining + '</span><span class="text-gray-600">/ 3 次</span>';
        }
        if (unlockBtnEl) {
            unlockBtnEl.style.display = 'block';
        }
        if (resetBtnEl) {
            resetBtnEl.classList.add('hidden');
        }
        if (remainingEl) {
            remainingEl.textContent = remaining;
        }
    }

    // 更新移动端
    const usageInfoMobileEl = document.getElementById('usageInfoMobile');
    const remainingMobileEl = document.getElementById('remainingCountMobile');
    const unlockBtnMobileEl = document.getElementById('unlockBtnMobile');
    
    if (usageData.isVip) {
        if (usageInfoMobileEl) {
            usageInfoMobileEl.innerHTML = '<span class="text-yellow-500 font-bold text-sm">🌟 VIP会员 - 无限使用</span>';
        }
        if (unlockBtnMobileEl) {
            unlockBtnMobileEl.style.display = 'none';
        }
        if (remainingMobileEl) {
            remainingMobileEl.textContent = '∞';
        }
    } else {
        if (usageInfoMobileEl) {
            usageInfoMobileEl.innerHTML = '<span class="text-gray-600 text-sm">今日剩余：</span><span id="remainingCountMobile" class="text-xhs-red font-bold">' + remaining + '</span><span class="text-gray-600 text-sm">/ 3 次</span>';
        }
        if (unlockBtnMobileEl) {
            unlockBtnMobileEl.style.display = 'block';
        }
        if (remainingMobileEl) {
            remainingMobileEl.textContent = remaining;
        }
    }
}

// 重置会员状态
function resetVipStatus() {
    const confirmation = confirm('确定要重置会员状态吗？\n\n这会清除所有本地数据，恢复到初始状态。');
    if (confirmation) {
        usageData = {
            date: new Date().toDateString(),
            count: 0,
            isVip: false,
            phone: null
        };
        saveUsageData();
        updateUsageDisplay();
        showToast('✅ 已重置成功！');
    }
}

// ===================================
// 套餐选择
// ===================================
function selectPlan(plan) {
    const plans = {
        'month': { name: '月卡', price: '￥11.88' },
        'lifetime': { name: '终身卡', price: '￥18.88' }
    };
    
    document.querySelectorAll('.select-plan').forEach(el => {
        el.classList.remove('border-xhs-red', 'bg-xhs-pink-light');
        el.classList.add('border-gray-200');
    });

    const selectedEl = plan === 'month' ? 
        document.getElementById('monthCard') : 
        document.getElementById('lifetimeCard');
    
    if (selectedEl) {
        selectedEl.classList.add('border-xhs-red', 'bg-xhs-pink-light');
        selectedEl.classList.remove('border-gray-200');
    }
    
    const nameEl = document.getElementById('selectedPlanName');
    const priceEl = document.getElementById('selectedPlanPrice');
    
    if (nameEl && priceEl && plans[plan]) {
        nameEl.textContent = plans[plan].name;
        priceEl.textContent = plans[plan].price;
    }
}

// ===================================
// 模板渲染
// ===================================
function renderTemplates(category = 'all') {
    const filtered = category === 'all'
        ? templates
        : templates.filter(t => t.category === category);

    const html = filtered.map(t => `
        <div class="template-item" data-id="${t.id}">
            <div class="template-name">${getCategoryEmoji(t.category)} ${t.name}</div>
            <div class="template-preview">${t.content.split('\n')[0]}</div>
        </div>
    `).join('');

    const templateList = document.getElementById('templateList');
    if (templateList) {
        templateList.innerHTML = html;
    }

    const templateListMobile = document.getElementById('templateListMobile');
    if (templateListMobile) {
        templateListMobile.innerHTML = html;
    }
}

function getCategoryEmoji(category) {
    const emojis = {
        'recommend': '💖',
        'review': '📊',
        'tips': '💡',
        'daily': '🌈'
    };
    return emojis[category] || '📝';
}

// ===================================
// 排版美化功能
// ===================================
const EMOJI_MAP = {
    '绝绝子': ['✨', '💖', '🔥', '🌟', '💥'],
    '推荐': ['👍', '✨', '💯', '🔥', '🌟'],
    '种草': ['🌱', '💖', '✨', '🔥', '🌟'],
    '安利': ['💫', '✨', '🌟', '🔥', '💖'],
    '姐妹': ['👭', '💖', '✨', '🌸', '💕'],
    '宝藏': ['💎', '🌟', '✨', '💫', '🎁'],
    '好用': ['👍', '✨', '💖', '🔥', '💯'],
    '性价比': ['💰', '✨', '👍', '💯', '🎉'],
    '推荐': ['👍', '✨', '💯', '🔥', '🌟'],
    '颜值': ['✨', '💖', '🌸', '🌟', '💫'],
    '爱了': ['💕', '💖', '✨', '🌸', '🔥'],
    '回购': ['🔄', '💖', '✨', '👍', '🔥']
};

const OPENING_EMOJIS = ['✨', '💖', '🌸', '🌟', '💫', '🎀', '🎁', '🌷', '🌺', '🌻', '🌹', '🥰', '💕', '💗', '💓', '❤️', '🔥', '💥', '💯', '👍', '🎉'];
const LIST_EMOJIS = ['✅', '📌', '💡', '✨', '🎯', '🌟', '💖', '🌸', '💫', '❤️'];

function beautifyText(text) {
    let formatted = text.trim();
    if (!formatted) return '';

    let paragraphs = formatted.split(/\n\n+/).map(p => p.trim()).filter(p => p);

    paragraphs = paragraphs.map((p, index) => {
        let processed = p;

        if (p.match(/^\d[.、]/) || p.match(/^[一二三四五六七八九十][.、]/) || p.match(/^[-•*]/)) {
            const emoji = LIST_EMOJIS[index % LIST_EMOJIS.length];
            processed = emoji + ' ' + p.replace(/^[\d-•*]+[.、\s]*/, '');
        } else if (index > 0 && !/^[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u.test(p)) {
            let selectedEmoji = getMatchingEmoji(p);
            processed = selectedEmoji + ' ' + p;
        }

        return processed;
    });

    let result = paragraphs.join('\n\n');

    const sortedKeys = Object.keys(EMOJI_MAP).sort((a, b) => b.length - a.length);
    
    for (let key of sortedKeys) {
        const emojis = EMOJI_MAP[key];
        if (result.includes(key)) {
            const emoji = emojis[Math.floor(Math.random() * emojis.length)];
            result = result.replace(key, key + emoji);
        }
    }

    return result;
}

function getMatchingEmoji(text) {
    for (let [key, emojis] of Object.entries(EMOJI_MAP)) {
        if (text.includes(key)) {
            return emojis[Math.floor(Math.random() * emojis.length)];
        }
    }
    return OPENING_EMOJIS[Math.floor(Math.random() * OPENING_EMOJIS.length)];
}

// ===================================
// UI 交互功能
// ===================================
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');

    if (toast && toastMessage) {
        toastMessage.textContent = message;
        toast.classList.remove('opacity-0', 'pointer-events-none');
        toast.classList.add('opacity-100');

        setTimeout(() => {
            toast.classList.remove('opacity-100');
            toast.classList.add('opacity-0', 'pointer-events-none');
        }, 2000);
    }
}

function copyToClipboard(text) {
    if (!text.trim()) {
        showToast('没有内容可复制');
        return;
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('已复制到剪贴板！');
        }).catch(() => {
            fallbackCopy(text);
        });
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand('copy');
        showToast('已复制到剪贴板！');
    } catch (err) {
        showToast('复制失败，请手动选择复制');
    }

    document.body.removeChild(textarea);
}

function openPayModal() {
    const modal = document.getElementById('payModal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

function closePayModal() {
    const modal = document.getElementById('payModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

function openAdminModal() {
    const modal = document.getElementById('adminModal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        renderMemberList();
    }
}

function closeAdminModal() {
    const modal = document.getElementById('adminModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

// ===================================
// 事件绑定
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    loadUsageData();
    updateUsageDisplay();
    renderTemplates();

    // 分类按钮点击事件 - 桌面端
    document.querySelectorAll('.template-category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.template-category-btn').forEach(b => {
                b.classList.remove('active');
            });
            e.target.classList.add('active');

            const category = e.target.dataset.category;
            renderTemplates(category);
        });
    });

    // 模板项点击事件 - 桌面端
    document.getElementById('templateList').addEventListener('click', (e) => {
        const templateItem = e.target.closest('.template-item');
        if (templateItem) {
            const templateId = parseInt(templateItem.dataset.id);
            const template = templates.find(t => t.id === templateId);

            if (template) {
                document.getElementById('inputText').value = template.content;
                document.getElementById('previewContent').textContent = template.content;
            }
        }
    });

    // 一键美化按钮 - 桌面端
    document.getElementById('beautifyBtn').addEventListener('click', () => {
        const inputText = document.getElementById('inputText').value;

        if (!inputText.trim()) {
            showToast('请先输入文案');
            return;
        }

        if (!canUse()) {
            openPayModal();
            return;
        }

        const beautified = beautifyText(inputText);
        document.getElementById('inputText').value = beautified;
        document.getElementById('previewContent').textContent = beautified;
        incrementUsage();
        showToast('✨ 排版成功！');
    });

    // 复制按钮 - 桌面端
    document.getElementById('copyBtn').addEventListener('click', () => {
        const text = document.getElementById('inputText').value;
        copyToClipboard(text);
    });

    // 解锁按钮 - 桌面端
    document.getElementById('unlockBtn').addEventListener('click', openPayModal);

    // 输入框实时预览 - 桌面端
    document.getElementById('inputText').addEventListener('input', (e) => {
        document.getElementById('previewContent').textContent = e.target.value || '排版效果将在这里显示...';
    });

    // 移动端分类按钮
    document.querySelectorAll('.template-category-btn-mobile').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.template-category-btn-mobile').forEach(b => {
                b.classList.remove('active');
            });
            e.target.classList.add('active');

            const category = e.target.dataset.category;
            renderTemplates(category);
        });
    });

    // 移动端模板点击
    document.getElementById('templateListMobile').addEventListener('click', (e) => {
        const templateItem = e.target.closest('.template-item');
        if (templateItem) {
            const templateId = parseInt(templateItem.dataset.id);
            const template = templates.find(t => t.id === templateId);

            if (template) {
                document.getElementById('inputTextMobile').value = template.content;
                document.getElementById('previewContentMobile').textContent = template.content;
            }
        }
    });

    // 移动端一键美化
    document.getElementById('beautifyBtnMobile').addEventListener('click', () => {
        const inputText = document.getElementById('inputTextMobile').value;

        if (!inputText.trim()) {
            showToast('请先输入文案');
            return;
        }

        if (!canUse()) {
            openPayModal();
            return;
        }

        const beautified = beautifyText(inputText);
        document.getElementById('inputTextMobile').value = beautified;
        document.getElementById('previewContentMobile').textContent = beautified;
        incrementUsage();
        showToast('✨ 排版成功！');
    });

    // 移动端复制按钮
    document.getElementById('copyBtnMobile').addEventListener('click', () => {
        const text = document.getElementById('inputTextMobile').value;
        copyToClipboard(text);
    });

    // 移动端解锁按钮
    document.getElementById('unlockBtnMobile').addEventListener('click', openPayModal);

    // 移动端输入框实时预览
    document.getElementById('inputTextMobile').addEventListener('input', (e) => {
        document.getElementById('previewContentMobile').textContent = e.target.value || '排版效果将在这里显示...';
    });

    // 支付弹窗 - 套餐选择
    const monthCardEl = document.getElementById('monthCard');
    if (monthCardEl) {
        monthCardEl.addEventListener('click', () => selectPlan('month'));
    }

    const lifetimeCardEl = document.getElementById('lifetimeCard');
    if (lifetimeCardEl) {
        lifetimeCardEl.addEventListener('click', () => selectPlan('lifetime'));
    }

    // 支付弹窗 - 验证按钮
    document.getElementById('verifyPaymentBtn').addEventListener('click', () => {
        const phone = document.getElementById('verifyPhone').value.trim();
        verifyMember(phone);
    });

    // 关闭支付弹窗
    document.getElementById('closeModalBtn').addEventListener('click', closePayModal);
    
    // 点击弹窗背景关闭
    document.getElementById('payModal').addEventListener('click', (e) => {
        if (e.target.id === 'payModal') {
            closePayModal();
        }
    });

    // ESC 键关闭弹窗
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePayModal();
            closeAdminModal();
        }
    });

    // 管理员入口
    const adminBtn = document.getElementById('adminBtn');
    if (adminBtn) {
        adminBtn.addEventListener('click', () => {
            const password = prompt('请输入管理员密码：');
            if (password === 'admin123') {
                openAdminModal();
            } else if (password !== null) {
                showToast('密码错误');
            }
        });
    }

    // 管理后台 - 添加会员
    const addMemberBtn = document.getElementById('addMemberBtn');
    if (addMemberBtn) {
        addMemberBtn.addEventListener('click', () => {
            const phone = document.getElementById('addMemberPhone').value.trim();
            const type = document.getElementById('memberType').value;
            
            if (!phone || phone.length !== 11) {
                showToast('请输入正确的手机号');
                return;
            }
            
            addMember(phone, type);
            document.getElementById('addMemberPhone').value = '';
            showToast('✅ 会员添加成功');
        });
    }

    // 关闭管理后台
    const closeAdminBtn = document.getElementById('closeAdminBtn');
    if (closeAdminBtn) {
        closeAdminBtn.addEventListener('click', closeAdminModal);
    }
    
    document.getElementById('adminModal').addEventListener('click', (e) => {
        if (e.target.id === 'adminModal') {
            closeAdminModal();
        }
    });

    // 重置会员按钮
    const resetBtnEl = document.getElementById('resetVipBtn');
    if (resetBtnEl) {
        resetBtnEl.addEventListener('click', resetVipStatus);
    }
});
