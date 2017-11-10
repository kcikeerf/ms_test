function build(arr){
    var pages=[];
    var obj;
    for (var i=0;i<arr.length;i++){
        if(i==0){
            obj={
                elements: [
                    {
                        type: 'html',
                        html: '<p>下面的问卷描述了常见的一些行为，有些看起来很像你，有些一点儿也不像你。请根据你自己的实际情况，从每道题的5个选项中选出一个最符合你真实情况的答案。你的作答将反馈给你，因此，真实作答将有助于你更好地了解自己，为更好的发展做准备。问卷共有80道题目，请坚持认真答完每一道题目</p>',
                        name: 'text1'
                    },
                    {
                        type: 'html',
                        html: '<p>注意</p>\n<ol>\n<li>请完成所有带*号的必选题</li>\n<li>请凭读题后第一印象作出选择，所有题目没有“正确答案”</li>\n<li>请尽可能地以较快的速度完成</li>\n</ol>',
                        name: 'text2'
                    }
                ],
                name: 'page'
            }
        }
        else{
            obj={
                elements: [
                    {
                        type: 'radiogroup',
                        choices: [
                            {
                                value: '完全不像我-1',
                                text: '完全不像我'
                            },
                            {
                                value: '有点像我-2',
                                text: '有点像我'
                            },
                            {
                                value: '一般像我-3',
                                text: '一般像我'
                            },
                            {
                                value: '比较像我-4',
                                text: '比较像我'
                            },
                            {
                                value: '非常像我-5',
                                text: '非常像我'
                            }
                        ],
                        colCount:1,
                        isRequired: true,
                        name: 'question'+i,
                        title: arr[i]
                    }
                ],
                name: 'page'+i
            }
        }
        pages.push(obj);
    }
    return pages;
}

var arr=[
    '下面的问卷描述了常见的一些行为，有些看起来很像你，有些一点儿也不像你。请根据你自己的实际情况，从每道题的5个选项中选出一个最符合你真实情况的答案。你的作答将反馈给你，因此，真实作答将有助于你更好地了解自己，为更好的发展做准备。问卷共有80道题目，请坚持认真答完每一道题目。',
    '词汇丰富，表达能力超出一般',
    '能准确记得自己读过的文章或听过的话',
    '表达生动有趣，善于描述、讲故事等',
    '阅读面很广，阅读理解能力很强',
    '对词句理解精确，能灵活运用熟语、成语或名句',
    '说理能力良好，擅长辩论或演说',
    '说话、写作能够把握重点，有条有理7',
    '说话、写作能够把握重点，有条有理8',
    '说话、写作能够把握重点，有条有理9',
    '说话、写作能够把握重点，有条有理10',
];
var pages=build(arr);

var SurveyQuestion={
    pages,
    goNextPageAutomatic: true,
    showPageTitles: false,
    showProgressBar: 'top',
    showTitle: false,
    showCompletedPage:true
}
export default SurveyQuestion;