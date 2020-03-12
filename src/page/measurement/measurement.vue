<template>
    <div>
        <div>
            <headerSelect />
        </div>
        <div class="content">
            <div class="left">
                <personalLeft />
            </div>
            <div class="measurement">
                <div class="small-measurement">
                    <div class="measurement-card">
                        <!-- 1 -->
                        <p class="card-title">MBTI职业性格测试</p>
                        <div class="line"></div>
                        <p class="indexexponent">91.8</p>
                        <p class="iexponent">你的测试指数为</p>
                        <div class="progress">
                            <div class="schedule"></div>
                        </div>
                        <ul class="test">
                            <li class="topic">题目进度：</li>
                            <li class="topic-num"><span>30</span>/
                                <span>30</span>
                            </li>
                            <li class="topic-repeat">再测一遍</li>
                        </ul>
                        <ul class="test">
                            <li class="topic">所属类型：</li>
                            <li class="topic-enf"> ENFJ（教导型）</li>
                        </ul>
                    </div>
                    <div class="measurement-card">
                        <!-- 2 -->
                        <p class="card-title">PSTR心里压力测试</p>
                        <div class="line"></div>
                        <p class="indexexponent">0</p>
                        <p class="iexponent">你的测试指数为</p>
                        <div class="progress">
                            <div class="schedule-PSTR"></div>
                        </div>
                        <ul class="test">
                            <li class="topic">题目进度：</li>
                            <li class="topic-num"><span>15</span>/
                                <span>30</span>
                            </li>
                            <li class="topic-repeat">继续测试</li>
                        </ul>
                        <ul class="test">
                            <li class="topic">所属类型：</li>
                            <li class="topic-enf">你还没有完成测试哦</li>
                        </ul>
                    </div>
                    <div class="measurement-card">
                        <!-- 3 -->
                        <p class="card-title">HBDI全脑优势测试</p>
                        <div class="line"></div>
                        <p class="indexexponent">0</p>
                        <p class="iexponent">你的数据完善度为</p>
                        <div class="progress">
                            <div class="schedule-HBDI"></div>
                        </div>
                        <ul class="test">
                            <li class="topic">题目进度：</li>
                            <li class="topic-num"><span>0</span>/
                                <span>30</span>
                            </li>
                            <li class="topic-repeat">再测一遍</li>
                        </ul>
                        <ul class="test">
                            <li class="topic">所属类型：</li>
                            <li class="topic-enf"> 你还没有开始测试哦</li>
                        </ul>
                    </div>
                </div>
                <div class="large-measurement">
                    <!-- 测评报告 -->
                    <div class="mianContentTop">
                        <span class="title">
                            <h3>测评报告</h3>
                        </span>
                        <span>
                            <el-dropdown trigger="click">
                                <span class="el-dropdown-link">
                                    <p>{{picker}}</p><i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown"  >
                                    <el-dropdown-item v-for="(item,index) in day" :key="index" @click.native="dropdown($event)">{{item.picker}}</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </span>
                    </div>
                    <div class="">
                        <el-table
                            :data="tableData"
                            style="width: 100%"
                            >
                        <el-table-column
                            prop="title"
                            label="测试类型"
                            width="180"
                            color="#080103"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="date"
                            label="测试时间"
                            width="180"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            label="当前测试得分"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="报告接收人"
                            align="center">
                        </el-table-column>
                         <el-table-column
                            fixed="right"
                            label="操作"
                            width="100">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="text" size="small"><i class="el-icon-edit"></i></el-button>
                                <!-- <el-button type="text" size="small">编辑</el-button> -->
                            </template>
</el-table-column>
</el-table>
</div>
</div>
<div class="guide-language">
    <div class="mianContentTop">
        <span class="title">
                            <h3>职业性格测试</h3>
                        </span>
    </div>
    <p class="language">引导语</p>
    <div class="language-tltle">
        <p>“我性格内向/外向，适合什么工作？”“哪些职业正好匹配我的性格？”“以我的个性从事什么行业好？”</p>
        <p>“我性格中的优势和劣势是什么？”“我是不是该继续现在从事的职业？” 不论是正待走进职场的毕业生，还是工作了一段时间的人，</p>
        <p>面对这类问题都会感到困惑——性格因素和职业选择之间到底存在什么样的关联呢？ </p>
    </div>
    <div class="languagebutton">
        <el-button type="text" class="l-button">开始测评</el-button>
    </div>
</div>
<div class="test-questions">
    <div class="mianContentTop">
        <div class="title">
            <span class="current">15</span>/<span class="overall">30</span>
        </div>
        <!-- <span>
                            <el-dropdown trigger="click">
                                <span class="el-dropdown-link">
                                    <p>{{picker}}</p><i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown"  >
                                    <el-dropdown-item v-for="(item,index) in day" :key="index" @click.native="dropdown($event)">{{item.picker}}</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </span> -->
    </div>
    <div class="thirty">
        <div class="thirty-xian"></div>
    </div>
    <div class="multiple">
        <p>下列哪一件事听起来比较吸引你？</p>
        <div class="rideo">
            <el-radio-group v-model="radio">
                <el-radio :label="3" class="radio-name">A.与恋人到很多人且社区活动频繁的地方</el-radio>
                <el-radio :label="6" class="radio-name">B.呆在家中与恋人做一些特别的事情，例如说观赏一部有趣的录影</el-radio>
                <el-radio :label="9" class="radio-name">C.与恋人到很多人且社交活动频繁的地方</el-radio>
                <el-radio :label="8" class="radio-name">D.呆在家中与恋人做一些特别的事情，例如说观赏一部有趣的录影</el-radio>
            </el-radio-group>
        </div>
        <el-button type="text" class="next-problem">下一题</el-button>
    </div>
</div>
<div class="prompt">
    <div class="mianContentTop">
        <div class="title">
            <span class="current">15</span>/<span class="overall">30</span>
        </div>
        <p class="prompt-date">
            <span>日期：</span>2019-11-30
        </p>
    </div>
    <img src="../../assets/remind.png" alt="" class="prompt-img">
    <p class="prompt-font">你好像还没做过任何评测报告哦 ，请选择上面的评测类型</p>
</div>
<div class="consequence">
    <div class="mianContentTop">
        <div class="title">
            评测报告
        </div>
        <p class="prompt-date">
            <span>日期：</span>2019-11-30
        </p>
    </div>
    <p class="teach">ENFJ教导型</p>
    <p class="teach-bottom">(谆谆善诱地引导他人)</p>
    <div class="graphics">

        <p class="graphics-tltie">一、你的MBTI图形</p>
        <div class="character">
            <ul class="character-left">
                <li>
                    <div>外向（E）</div>
                    <div class="Outgoing">
                        <div class="Outgoing-div"></div>
                    </div>
                </li>
                <li>
                    <div>实感（S）</div>
                    <div class="Outgoing">
                        <div class="Outgoing-div"></div>
                    </div>
                </li>
                <li>
                    <div>思考（T）</div>
                    <div class="Outgoing">
                        <div class="Outgoing-div"></div>
                    </div>
                </li>
                <li>
                    <div>判断（J）</div>
                    <div class="Outgoing">
                        <div class="Outgoing-div"></div>
                    </div>
                </li>
            </ul>
            <ul class="character-right">
                <li>
                    <div class="Outgoing-right">
                        <div class="Outgoing-divright"></div>
                    </div>
                    <div>（I）内向</div>
                </li>
                <li>
                    <div class="Outgoing-right">
                        <div class="Outgoing-divright"></div>
                    </div>
                    <div>（N）内向</div>
                </li>
                <li>
                    <div class="Outgoing-right">
                        <div class="Outgoing-divright"></div>
                    </div>
                    <div>（F）情感</div>
                </li>
                <li>
                    <div class="Outgoing-right">
                        <div class="Outgoing-divright"></div>
                    </div>
                    <div>（P）知觉</div>
                </li>
            </ul>
        </div>
    </div>
    <ul class="level">
        <li class="level-strong">强</li>
        <li>明显</li>
        <li>中等</li>
        <li>轻微</li>
        <li>中等</li>
        <li>明显</li>
        <li>强</li>
    </ul>
    <ul class="prompt_title">
        <li><span></span>倾向示意图表示四个维度分别的倾向程度。从中间往两侧看，绿色指示条对应下面坐标的哪个区间。</li>
        <li><span></span>请留意收藏报告地址，或复制报告内容到自己的博客。</li>
    </ul>
    <div class="description">
        <p class="graphics-tltie">二、基本描述</p>
        <div class="description-main">
            <div class="description-left">
                <img src="../../assets/a5.png" class="description_head">
                <ul class="description-abstract">
                    <li>ENFJ (Extroverted Feelingwith Intuition)代表人物：</li>
                    <li>马丁.路德.金 维权人士</li>
                    <li>语录：让我们创建一个社会，帮助人类从偏见和种族主义的黑暗深处上升到充满理解和兄弟情谊的崇高境界。</li>
                </ul>
            </div>
            <div class="description-right">
                <p> 才储分析：您的性格类型倾向为“ ENFJ ”(外向 直觉 情感 判断 倾向度： E86 N100 F86 J100 不假思索指数：31)</p>
                <ul class="description-ul">
                    <li>温情，有同情心，反应敏捷，有责任感。非常关注别人的情绪、需要和动机。善于发现他人的潜能，并希望能帮助他们实现。能够成为个人或群体成长和进步的催化剂。忠诚，对赞美和批评都能做出积极地回应。友善好社交。在团体中能很好地帮助他人，并有鼓舞他人的领导能力。</li>
                    <li>ENFJ型的人热爱人类，他们认为人的感情是最重要的。而且他们很自然地关心别人，以热情的态度对待生命，感受与个人相关的所有事物。由于他们很理想化，按照自己的价值观生活，因此ENFJ型的人对于他们所尊重和敬 佩的人、事业和机构非常忠诚。他们精力充沛、满腔热情、富有责任感、勤勤恳恳、锲而不舍。 ENFJ型的人具有自我批评的自然倾向。然而，他们对他人的情感具有责任心，所以ENFJ型的人很少在公共场合批评人。他们 敏锐地意识到什么是（或不是）合适的行为。</li>
                    <li>他们彬彬有礼、富有魅力、讨人喜欢、深谙社会。ENFJ型的人具有平和的性格与忍耐力，他们长于外交，擅长在自己的周围激发幽默感。他们是天然的领导者，受人欢迎而有魅 力。他们常常得利于自己口头表达的天份，愿意成为出色的传播工作者。</li>
                    <li>ENFJ型的人在自已对情况感受的基础上做决定，而不是基于事实本身。他们对显而易见的事物之外的可能性，以及这些可能性以怎样的方式影响他人 感兴趣。 ENFJ型的人天生具有条理性，他们喜欢一种有安排的世界，并且希望别人也是如此。即使其他人正在做决定，他们还是喜欢把问题解决了。</li>
                    <li>ENFJ型的人富有同情心和理解力，愿意培养和支持他人。他们能很好地 理解别人，有责任感和关心他人。由于他们是理想主义者，因此他们通常能看到别人身上的优点。</li>
                </ul>

            </div>
        </div>
        <p class="conclusion">您适合的领域有：培训、咨询、教育、新闻传播、公共关系、文化艺术</p>
    </div>
    <div class="temperament">
        <p class="graphics-tltie">三、气质类型</p>
        <ul class="temperament1">
            <li>根据大卫.凯尔西（David Keirsey）气质与性情理论，你属于“理想主义者”，下面是对“理想主义者”的描述：</li>
            <li>
                “理想主义者”型的人感兴趣的是事物的意义、关系和可能性，并基于其个人的价值观念做出决定。这是一类关心个人成长和如何理 解他人与自我的人。</li>
            <li>“理想主义者”做人的原则是：“真实地面对自已”，是精神上最具哲理性的人。“理想主义者”乐于接受新的思想，善 于容纳他人。</li>
            <li>“理想主义者”好象永远在寻找生存的意义。他们非常崇尚人与人之间和各种关系中的真实和正直，容易将别人理想化。许多“理想 主义者”本能地喜欢帮助别人成长和进步。“理想主义者”是很好的传播者，被人们认为是促进积极变化的催化剂。
            </li>
            <li>他们天生能够理解别人的情感，关心他们在生活、工作中碰到的人们（如同事、病人或客户、雇员）的需要。 对于“理想主义者”型的人而言，一份好的工作应该是对他们个人很有意义的工作，而不是简单的常规工作或只是一种谋生手段。“ 理想主义者”崇尚和谐，不愿意在一种竞争激烈或四分五裂的环境中发展。他们喜欢民主、能够激励各种层次的人们高度参与的组织 。他们会被那些促进人性价值的组织或那些允许他们帮助别人完成工作的职业所吸引。
            </li>
        </ul>                
        <ul class="temperament2">
            <li><p>总体描述</p> </li>
            <li> 1. 对别人的情绪敏感，能理解、体会别人的心情，善于安慰、鼓励别人</li>
            <li>2. 对文字、语言敏感</li>
            <li>3. 善于分析、总结</li>
            <li>4. 善于从整体上把握事物</li>
            <li>5. 能理解复杂的理论概念，善于将事情概念化，善于从中推断出原则 </li>
            <li>6. 擅长策略性思维</li>
        </ul>                           
        <ul class="temperament2">
            <li><p>潜在的弱点</p> </li>
            <li>1. 有仅仅凭个人的好恶或价值观来决定事情，并希望别人也以同样的角度或标准来处理问题的倾向。</li>
            <li>2. 有时他们心里老想着别人的问题，可能会过于陷于其中，以至于被其困扰。</li>
            <li>3. 有时容易将别人或事情理想化，不够实际。</li>
            <li>4. 不是特别善于管束和批评他人，尽管常常自我批评。有时会为了和睦而牺牲自己的意见或利益。</li>
            <li>5. 有些此类型成员比较容易动感情，情绪波动较大。</li>
        </ul>
    </div>
    <div class="advantage">
        <p class="graphics-tltie">四、优势与劣势</p>
        <ul class="advantage1">
            <li><p class="advantage-p">ENFJ的特质： 教导型——谆谆善诱地引导他人</p> </li>
            <li>“理想主义者”型的人感兴趣的是事物的意义、关系和可能性，并基于其个人的价值观念做出决定。这是一类关心个人成长和如何理 解他人与自我的人。</li>
            <li>“理想主义者”做人的原则是：“真实地面对自已”，是精神上最具哲理性的人。“理想主义者”乐于接受新的思想，善 于容纳他人。</li>
            <li>“理想主义者”好象永远在寻找生存的意义。他们非常崇尚人与人之间和各种关系中的真实和正直，容易将别人理想化。许多“理想 主义
                者”本能地喜欢帮助别人成长和进步。“理想主义者”是很好的传播者，被人们认为是促进积极变化的催化剂。</li>
            <li>他们天生能够理解别人的情感，关心他们在生活、工作中碰到的人们（如同事、病人或客户、雇员）的需要。对于“理想主义者”型的
                人而言，一份好的工作应该是对他们个人很有意义的工作，而不是简单的常规工作或只是一种谋生手段。“ 理想主义者”崇尚和谐，不愿意在一种竞争激烈或四分五裂的环境中发展。他们喜欢民主、能够激励各种层次的人们高度参与的组织 。他们会被那些促进人性价值的组织或那些允许他们帮助别人完成工作的职业所吸引。</li>
        </ul>
        <ul class="advantage1">
            <li><p class="disadvantage">优势： </p> </li>            
            <li>你善于社交、气宇不凡、易感应、善劝服。你精力旺盛，热情洋溢，能很快理解他人情感的需要、动机和所忧虑的事情，因此能做到与他人高度协调。你把注意力放在帮助他人，鼓励他人进步向上。你是催化剂，能引发出他人的最佳状态。既可以做有号召力的领袖，也可以做忠实的追随者。
                 你性情平和，心胸宽阔，且很圆滑，很会促进周边关系的和睦，对于批评和紧张特别敏感。你容易看出他人的发展潜力，并倾力帮助他人发挥潜力，是体贴的助人为乐者。你愿意组织大家参与活动，使大家和睦又感到愉快。
            </li>
            <li>你是理想主义者，非常看重自己的价值，对自己尊重景仰的人、事业和公司都非常忠诚。有责任感、谨慎、坚持不懈，同时对新观点很好奇。若能为人类的利益有所贡献，会感到深受鼓舞。
                 你对现实以外的可能性，以及对他人的影响非常感兴趣，容易看出他人的发展潜力和最大的优点，发现别人看不到的意义和联系，并感到自己与万物息息相关，可以井然有序地安排生活和工作。
            </li>
        </ul>
        <ul class="advantage1">
            <li><p class="disadvantage"> 劣势： </p> </li>
            <li>你非常理想化，认为世界是自己想象中的那样，不愿意接受与此相抵触的事情，经常忽略理想所需要的现实和细节问题。
                你依照情感行事，很少用逻辑，主要根据个人的价值观进行判断，无视行为所带来的后果，有时会过度陷入别人的情感和问题中。总是避免冲突，有时会不够诚实和公平。试着更多地去关注事情，而不只是人，更有利于你合理地做出决定。
                你有很高的热情，急于迎接新的挑战，有时会做出错误的假设或过于草率的决定。建议你对计划中的细节多加注意，等获取足够多的信息之后再做决策。</li>
            <li>你总想得到表扬，希望自己的才能和贡献得到赏识，你对于批评非常脆弱，容易忧虑，感到内疚，失去自信。当压力很大时，会变得暴燥，慌乱、吹毛求疵。</li>
        </ul>
    </div>
    <div class="operation">
        <el-button type="text" class="download">下载到本地</el-button>
        <p>温馨提示： 若希望更全面了解自己及发展建议，可以继续参与 <span> MBTI第二步测试！</span></p>
        <p>即将面临高考专业选择的同学，可以继续参与   <span>APESK专业选择评估测试</span></p>
        <p>若您是HR(企业人力资源)，可以继续了解  <span> MBTI在人才招聘选拔中的应用</span></p>
        <p> 你可能感兴趣的：<span> NFC非迫选型性格测试！</span></p>
    </div>
</div>
</div>
</div>
<div>
    <fonter />
</div>
</div>
</template>
<script>
    import headerSelect from "@/components/headerSelect";
    import personalLeft from "@/components/personalCenter/personalLeft";
    import fonter from "@/components/fonter";
    export default {

        data() {
            return {
                picker: "近一月",
                input2: "",
                day: [{
                        picker: "近一周"
                    },
                    {
                        picker: "近一月"
                    },
                    {
                        picker: "近半年"
                    }
                ],
                tableData: [{
                    title: 'MBTI职业性格测试',
                    date: '2019.11.20',
                    address: '91.8',
                    name: '翁少锋'
                }],
                radio: '',
            };
        },
        mounted() {
            // this.getCookie();
        },
        components: {
            headerSelect,
            personalLeft,
            fonter,
        },
        methods: {
            dropdown(event) {
                let ebebeb = event.target.innerHTML.substr("7")
                console.log(ebebeb)
                this.picker = ebebeb
            },
        }
    };
</script>
<style scoped>
    .content {
        width: 1200px;
        min-width: 1200px;
        margin: 0 auto;
        display: flex;
    }
    .left {
        width: 250px;
    }
    .measurement {
        width:1020px;
        min-width: 1020px;
        border-radius:6px;
        margin: 30px 0px 0px 60px;
    }
    .small-measurement {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    /* 小表格 */
    .measurement-card {
        width:326px;
        height:293px;
        background: #ffffff;;
        box-shadow:0px 6px 12px 0px rgba(8,1,3,0.06);
        border-radius:6px;
    }
    .card-title {
        /* width:146px; */
        height:17px;
        font-size:16px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:#404447;
        line-height:40px;
        margin: 12px 0px 0px 28px;
    }
    .line {
        width:34px;
        height:2px;
        background-color: #339999;
        margin: 20px 0px 0px 28px;
    }
    .indexexponent {
        width:100%;
        height:27px;
        font-size:36px;
        font-family:Arial;
        font-weight:bold;
        color:#339999;
        line-height:49px;
        text-align: center;
        margin-top: 27px;
    }
    .iexponent {
        width: 100%;
        text-align: center;
        color: #999999;
        margin-top: 25px;
    }
    /* 进度条 */
    .progress {
        width:248px;
        height:6px;
        background:#999999;
        border-radius:3px;
        margin: 0 auto;
        margin-top: 43px;
    }
    .schedule {
        width: 100%;
        height:6px;
        background-color: #339999;
        border-radius:3px;
    }
    .test {
        width: 218px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        margin-top: 19px;
    }
    .topic {
        color: #B2B5B8;
        font-size: 14px;
    }
    .topic-num {
        width: 62px;
        font-size: 14px;
    }
    .topic-repeat {
        color: #339999;
        font-size: 14px;
        cursor: pointer;
        user-select: none;
    }
    .topic-enf {
        width: 130px;
        color: #404447;
        font-size: 14px;
    }
    .schedule-PSTR {
        width: 50%;
        height:6px;
        border-radius:3px;
        background-color: #339999;
    }
    .schedule-HBDI {
        width: 0%;
        height:6px;
        border-radius:3px;
        background-color: #339999;
    }
    /* 大表格 */
    /* 引评语 */
    .guide-language {
        width:1020px;
        height:538px;
        background:rgba(255,255,255,1);
        box-shadow:0px 6px 12px 0px rgba(8,1,3,0.06);
        border-radius:6px;
        margin: 20px 0px 0px 0px;
        display: none;
    }
    .language {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-weight:400;
        margin-top: 49px;
        font-size: 24px;
        color: #339999;
        
    }
    .language-tltle {
        width:878px;
        height:95px;
        font-size:14px;
        font-family:Microsoft YaHei;
        text-align: center;
        font-weight:400;
        color:rgba(153,153,153,1);
        line-height:40px;
        margin: 0 auto;
        margin-top: 27px;
    }
    .languagebutton {
        width:383px;
        height:40px;
        /* background:#339999;
        border:2px solid #339999; */
        border-radius:6px;
        margin: 0 auto;
        margin-top: 42px;
        background:#339999;
    }
    .l-button,.l-button:active{
        width:383px;
        height:40px;
        color: #ffffff;
        border: none;
    }
    .l-button:hover {
         width:383px;
        height:40px;
        background:#339999;
        color: #ffffff;
        border: none;
    }
    /* 测评报告 */
    .large-measurement {
        width:1020px;
        height:538px;
        background:rgba(255,255,255,1);
        box-shadow:0px 6px 12px 0px rgba(8,1,3,0.06);
        border-radius:6px;
        margin: 20px 0px 0px 0px;
        display: none;
    }
    .mianContentTop{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        border-bottom: 1px solid #ebebeb;
        height: 50px;
    }
    .title{
        height: 100%;
        line-height: 50px;
        border-bottom: 2px solid #339999;
    }
    .title>h3{
        color: #404447;
        font-size: 14px;
        font-weight: 400
    }
    .mianContentTop>>>.searchInput .el-input__inner{
        border: none;
    }
    .el-dropdown-link{
        display: flex;
    }
    .el-dropdown-link p{
        width: 50px;
        text-align: center;
    }
    /* 试题 */
    .test-questions {
        width:1020px;
        height:538px;
        background:rgba(255,255,255,1);
        box-shadow:0px 6px 12px 0px rgba(8,1,3,0.06);
        border-radius:6px;
        margin: 20px 0px 0px 0px;
        position: relative;
        display: none;
    }
    .current {
        color: #339999;
        font-size: 16px;
    }
    .overall {
        color: #080103;
        font-size: 16px;
    }
    .multiple {
        width: 500px;
        min-width: 500px;
        margin: 0 auto;
        margin-top: 74px;
        /* border: 1px solid red; */
        text-align: left;
    }
    .multiple p {
        text-align: left;
    }
    .thirty {
        width: 980px;
        height: 2px;
        /* margin: 0 auto; */
        /* background-color: #E8ECEE; */
        position: absolute;
        top: 47px;
        left: 23px;
    }
    .thirty-xian {
        width: 50%;
        height: 2px;
        background-color: #339999;
    }
    .rideo {
        margin-top: 17px;
    }
    .radio-name {
        margin-top: 10px;
    }
    .radio-name>>>.el-radio__label {
        color: #999999;
    }
    .radio-name>>>.el-radio__inner {
        border-color: #CCCCCC;

    }
    .radio-name>>>.el-radio__input.is-checked .el-radio__inner {
        background: none;
        border-color: #339999;
    }
    .next-problem {
        width:383px;
        height:40px;
        background:rgba(51,153,153,1);
        border:2px solid rgba(51, 153, 153, 1);
        border-radius:6px;
        color: #ffffff;
        margin-top: 42px;
    }
    /* 测评报告 */
    .prompt {
        width:1020px;
        height:538px;
        background:rgba(255,255,255,1);
        box-shadow:0px 6px 12px 0px rgba(8,1,3,0.06);
        border-radius:6px;
        margin: 20px 0px 0px 0px;
        position: relative;
        text-align: center;
        display: none;
    }
    .prompt-img {
        margin-top: 124px;
    }
    .prompt-font {
        color: #999999;
    }
    .prompt-date {
        color: #666666;
        font-size:14px;
    }
    /* 测评结果 */
    .consequence{
        width:1020px;
        /* height:538px; */
        background:rgba(255,255,255,1);
        box-shadow:0px 6px 12px 0px rgba(8,1,3,0.06);
        border-radius:6px;
        margin: 20px 0px 0px 0px;
        position: relative;
        
    }
    .teach {
        font-size: 36px;
        margin-top: 36px;
        color: #333333;
        text-align: center;
    }
    .teach-bottom {
        color: #999999;
        font-size: 18px;
        margin-top: 7px;
        text-align: center;
        margin-bottom: 60px;
    }
    .graphics {
        width: 850px;
        margin: 0 auto;
        
    }
    .graphics-tltie {
        font-size:18px;
        margin-top: 30px;
    }
    .character {
        width: 750px;
        display: flex;
        margin: 0 auto;
        margin-top: 31px;
    }
    .character-left {
        width: 340px;
    }
    .character-right {
        width: 340px;
    }
    .character-left li {
        height: 26px;
        /* line-height: 26px; */
        display: flex;
    }
    .character-right li {
        height: 26px;
        display: flex;
    }
    .Outgoing {
        width:248px;
        height:10px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(51, 153, 153, 1);
        border-radius:3px;
    }
    .Outgoing-right {
         width:248px;
        height:10px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(51, 153, 153, 1);
        border-radius:3px;
        position: relative;
    }
    .Outgoing-divright {
        width: 50%;
        height: 8px;
        background-color: #339999;
        background:#339999;
        /* border:1px solid #339999; */
        border-radius:1px;
        position: absolute;
        top: 0px;
        right: 0px;
    }
    .Outgoing-div {
        width: 50%;
        height: 8px;
        background-color: #339999;
        background:#339999;
        /* border:1px solid #339999; */
        border-radius:1px;
    }
    /* 等级 */
    .level {
        width:506px;
        height:22px;
        display: flex;
        justify-content: space-between;
        margin: 17px 0px 0px 210px;
    }
    .level li {
        width: 76px;
        height: 21px;
        border: 1px solid #339999;
        border-top: none;
        border-left: none;
        text-align: center;
        line-height: 21px;
        font-size: 12px;
        color: #333333;
    }
    .level-strong {
        border-left: 1px solid #339999 !important;
    }
    .prompt_title {
        width: 660px;
        font-size: 14px;
        color: #333333;
        margin:60px 0px 0px 210px;
    }
    .prompt_title  li{
        margin: 5px;
        height: 16px;
        line-height: 11px;
        display: flex;
    }
    .prompt_title span {
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #339999;
        margin-right: 10px;
    }
    /*er 基本描述 */
    .description {
        width: 850px;
        margin: 0 auto;
        border-bottom: 1px solid #EAEEEF;
        border-top: 1px solid #EAEEEF;
        margin-top: 61px;
    }
    .description-main {
        display: flex;
        margin: 30px 0px 0px 0px;
    }
    .description-left {
        width:200px;
        height:441px;
        
    }
    .description-right {
        width:572px;
        height:435px;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:#333333;
        margin: 0px 0px 0px 30px;
    }
    .description_head {
        width:200px;
        height:290px;
    }
    .description-abstract {
        width: 100%;
        height: 151px;
        font-size: 12px;
        background-color: #EAEEEF;
        color: #666666; 
        text-align: left;
        /* padding: 0px 5px 0px 5px; */
    }
    .description-abstract li {
        padding: 5px 0px 0px 5px;
        line-height: 18px;
    }
    .description-ul {
        font-size: 14px;
        color: #999999;
        margin-top: 30px;
    }
    .description-ul li {
        margin-top: 25px;
    }
    .conclusion {
        font-size: 14px;
        color: #666666;
        text-align: left;
        margin: 27px 0px 60px 0px;
    }
    /* 气质 */
    .temperament {
        width: 850px;
        margin: 0 auto;
        border-bottom: 1px solid #EAEEEF;
        /* border-top: 1px solid #EAEEEF; */
        margin-top: 61px;
    }
    .temperament1 {
        color: #999999;
        font-size: 14px;
        margin-bottom: 30px;
    }
    .temperament1 li {
        margin-top: 15px;
    }
    /* 总体描述 */
    .temperament2 {
        font-size: 14px;
        color: #999999;
        margin-bottom: 30px;
    }
    .temperament2 p {
        font-size: 16px;
        color: #000000;
        margin-bottom: 20px;
    }
    .temperament2 li {
        margin-top: 5px;
    }
    /* 优势和劣势 */
    .advantage {
        width: 850px;
        margin: 0 auto;
        border-bottom: 1px solid #EAEEEF;
        /* border-top: 1px solid #EAEEEF; */
        margin-top: 61px;
    }
    .advantage-p {
        margin-top: 30px;
    }
    .advantage1 {
        color: #999999;
        font-size: 14px;
        margin-bottom: 30px;
    }
    .advantage1 li {
        margin-top: 15px;
    }
    .disadvantage {
        font-size: 16px;
        color: #000000;
    }
    /* 操作 */
    .operation {
        width: 100%;
        height: 250px;
        border-bottom: 1px solid #EAEEEF;
        /* border-top: 1px solid #EAEEEF; */
        margin: 61px 0px 60px 0px;
        text-align: center;
        -moz-user-select:none;/*火狐*/
        -webkit-user-select:none;/*webkit浏览器*/
        -ms-user-select:none;/*IE10*/
        -khtml-user-select:none;/*早期浏览器*/
        user-select:none;

    }
    .download {
        width:383px;
        height:40px;
        background:#339999;
        border:2px solid #339999;
        color: #ffffff;
        border-radius:6px;
    }
    .operation p {
        font-size: 14px;
        color: #666666;
        margin-top: 20px;
        cursor: pointer;
    }
    .operation span {
        color: #339999;
        text-decoration:underline;
        margin-left: 10px;
    }
</style>