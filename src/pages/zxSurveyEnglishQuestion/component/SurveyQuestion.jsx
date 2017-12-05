let SurveyQuestion={
    goNextPageAutomatic: true,
    showPageTitles: false,
    showProgressBar: 'top',
    showPageNumbers:false,
    showTitle: false,
    pages: [
        {
            elements: [
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-0',
                            text: 'B'
                        },
                        {
                            value: 'C-5',
                            text: 'C'
                        },
                        {
                            value: 'D-0',
                            text: 'D'
                        }
                    ],
                    colCount: 1,
                    isRequired: true,
                    name: 'question1',
                    title: "\n<p style=\"line-height:130%; font-size:10.5pt\" title=\"\"><span style=\"\">1. The weather here is very hot _______summer.</span></p>\n\n<p class=\"4\" title=\"\">A. at</p>\n\n<p class=\"4\" title=\"\">B. on</p>\n\n<p class=\"4\" title=\"\">C. in</p>\n\n<p class=\"4\" title=\"\">D. of</p>\n"
                }
            ],
            name: 'page1'
        },
        {
            elements: [
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-5',
                            text: 'B'
                        },
                        {
                            value: 'C-0',
                            text: 'C'
                        },
                        {
                            value: 'D-0',
                            text: 'D'
                        }
                    ],
                    colCount: 1,
                    isRequired: true,
                    name: 'question2',
                    title: "\n<p style=\"line-height:130%; font-size:10.5pt\" title=\"\"><span style=\"\">2. We can go to see a doctor in the ______.</span></p>\n\n<p class=\"4\" title=\"\">A. bank</p>\n\n<p class=\"4\" title=\"\">B. hospital</p>\n\n<p class=\"4\" title=\"\">C. supermarket</p>\n\n<p class=\"4\" title=\"\">D. library</p>\n"
                }
            ],
            name: 'page2'
        },
        {
            elements: [
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-0',
                            text: 'B'
                        },
                        {
                            value: 'C-0',
                            text: 'C'
                        },
                        {
                            value: 'D-5',
                            text: 'D'
                        }
                    ],
                    colCount: 1,
                    isRequired: true,
                    name: 'question3',
                    title: "\n<p style=\"line-height:130%; font-size:10.5pt\" title=\"\"><span style=\"\">3. —Are you _____ on Saturday, Bob?</span></p>\n\n<p style=\"text-indent:10.5pt; line-height:130%; font-size:10.5pt\" title=\"\"><span style=\"\">—Yes, I am. I don’t go to school that day.</span></p>\n\n<p class=\"4\">A. funny</p>\n\n<p class=\"4\" title=\"\"><span style=\"color:#000000\">B. tired</span></p>\n\n<p class=\"4\" title=\"\"><span style=\"color:#000000\">C. lucky</span></p>\n\n<p class=\"4\" title=\"\">D. free</p>\n"
                }
            ],
            name: 'page3'
        },
        {
            elements: [
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-0',
                            text: 'B'
                        },
                        {
                            value: 'C-5',
                            text: 'C'
                        },
                        {
                            value: 'D-0',
                            text: 'D'
                        }
                    ],
                    colCount: 1,
                    isRequired: true,
                    name: 'question4',
                    title: "\n<p style=\"line-height:130%; font-size:10.5pt\"><span style=\"\">4. My sister can’t _______ in a river.</span></p>\n\n<p class=\"4\">A. skate</p>\n\n<p class=\"4\">B. drive</p>\n\n<p class=\"4\" title=\"\">C. swim</p>\n\n<p class=\"4\">D. jump</p>\n"
                }
            ],
            name: 'page4'
        },
        {
            elements: [
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-5',
                            text: 'B'
                        },
                        {
                            value: 'C-0',
                            text: 'C'
                        },
                        {
                            value: 'D-0',
                            text: 'D'
                        }
                    ],
                    colCount: 1,
                    isRequired: true,
                    name: 'question5',
                    title: "\n<p style=\"line-height:150%; font-size:10.5pt\"><span style=\"\">5. —Is this your ruler?</span></p>\n\n<p style=\"text-indent:10.5pt; line-height:150%; font-size:10.5pt\"><span style=\"\">—Yes, it’s______.</span></p>\n\n<p class=\"4\">A. my</p>\n\n<p class=\"4\">B. mine</p>\n\n<p class=\"4\">C. hers</p>\n\n<p class=\"4\">D. his</p>\n"
                }
            ],
            name: 'page5'
        },
        {
            elements: [
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-0',
                            text: 'B'
                        },
                        {
                            value: 'C-5',
                            text: 'C'
                        },
                        {
                            value: 'D-0',
                            text: 'D'
                        }
                    ],
                    colCount: 1,
                    isRequired: true,
                    name: 'question6',
                    title: "\n<p style=\"line-height:150%; font-size:10.5pt\"><span style=\"\">6. —Could I call you by your first name?</span></p>\n\n<p style=\"line-height:150%; font-size:10.5pt\"><span style=\"\">—Yes, you ______.</span></p>\n\n<p class=\"4\">A. will</p>\n\n<p class=\"4\">B. could</p>\n\n<p class=\"4\">C. can</p>\n\n<p class=\"4\">D. must</p>\n"
                }
            ],
            name: 'page6'
        },
        {
            elements: [
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-0',
                            text: 'B'
                        },
                        {
                            value: 'C-5',
                            text: 'C'
                        },
                        {
                            value: 'D-0',
                            text: 'D'
                        }
                    ],
                    colCount: 1,
                    isRequired: true,
                    name: 'question7',
                    title: "\n<p style=\"line-height:130%; font-size:10.5pt\"><span style=\"color: rgb(0, 0, 0);\">7. — What’s your brother doing in his room now?</span></p>\n\n<p style=\"text-indent:10.5pt; line-height:130%; font-size:10.5pt\"><span style=\"color: rgb(0, 0, 0);\">—He ________ a kite.</span></p>\n\n<p class=\"4\">A. makes</p>\n\n<p class=\"4\" title=\"\">B. made</p>\n\n<p class=\"4\">C. is making</p>\n\n<p class=\"4\">D. will make</p>\n"
                }
            ],
            name: 'page7'
        },
        {
            elements: [
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-0',
                            text: 'B'
                        },
                        {
                            value: 'C-0',
                            text: 'C'
                        },
                        {
                            value: 'D-5',
                            text: 'D'
                        }
                    ],
                    colCount: 1,
                    isRequired: true,
                    name: 'question8',
                    title: "\n<p style=\"line-height:150%; font-size:10.5pt\" title=\"\"><span style=\"\">8. Mr. Mott is out. But he ______ here a few minutes ago.</span></p>\n\n<p class=\"4\" title=\"\">A. would be</p>\n\n<p class=\"4\" title=\"\">B. is</p>\n\n<p class=\"4\">C. will be</p>\n\n<p class=\"4\" title=\"\">D. was</p>\n"
                }
            ],
            name: 'page8'
        },
        {
            elements: [
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-0',
                            text: 'B'
                        },
                        {
                            value: 'C-5',
                            text: 'C'
                        },
                        {
                            value: 'D-0',
                            text: 'D'
                        }
                    ],
                    colCount: 1,
                    isRequired: true,
                    name: 'question9',
                    title: "\n<p style=\"line-height:130%; font-size:10.5pt\"><span style=\"\">9. There _____some milk and apples in the fridge.</span></p>\n\n<p class=\"4\" title=\"\">A. has</p>\n\n<p class=\"4\" title=\"\">B. have</p>\n\n<p class=\"4\" title=\"\">C. is</p>\n\n<p class=\"4\">D. are</p>\n"
                }
            ],
            name: 'page9'
        },
        {
            elements: [
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-5',
                            text: 'B'
                        },
                        {
                            value: 'C-0',
                            text: 'C'
                        },
                        {
                            value: 'D-0',
                            text: 'D'
                        }
                    ],
                    colCount: 1,
                    isRequired: true,
                    name: 'question10',
                    title: "\n<p style=\"line-height:130%; font-size:10.5pt\"><span style=\"\">10. —Hi, Carol. Is your brother t</span><span style=\"\">all</span><span style=\"\"> or </span><span style=\"\">short</span><span style=\"\">?</span></p>\n\n<p style=\"text-indent:21pt; line-height:130%; font-size:10.5pt\"><span style=\"\">—____________</span></p>\n\n<p class=\"4\">A. Yes, he is</p>\n\n<p class=\"4\">B. He’s a little tall</p>\n\n<p class=\"4\">C. No, he isn’t tall</p>\n\n<p class=\"4\">D. He’s fat</p>\n"
                }
            ],
            name: 'page10'
        },
        {
            elements: [
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-5',
                            text: 'B'
                        },
                        {
                            value: 'C-0',
                            text: 'C'
                        },
                        {
                            value: 'D-0',
                            text: 'D'
                        }
                    ],
                    colCount: 1,
                    isRequired: true,
                    name: 'question11',
                    title: "\n<p style=\"line-height:130%; font-size:10.5pt\"><span style=\"\">11. _________swim in the river alone, Karen. It’s too dangerous(</span><span style=\"\">危险</span><span style=\"\">).</span></p>\n\n<p class=\"4\">A. Not</p>\n\n<p class=\"4\">B. Don’t</p>\n\n<p class=\"4\">C. Doesn’t</p>\n\n<p class=\"4\">D. No</p>\n"
                }
            ],
            name: 'page11'
        },
        {
            elements: [
                {
                    type: "html",
                    html: "\n<p style=\"line-height:130%; font-size:10.5pt\" title=\"\"><span style=\"\">A.</span><span style=\"\">Why is it so?</span></p>\n\n<p style=\"line-height:130%; font-size:10.5pt\" title=\"\"><span style=\"\">B.</span><span style=\"\">How does she go to work?</span></p>\n\n<p style=\"line-height:130%; font-size:10.5pt\" title=\"\"><span style=\"\">C.</span><span style=\"\">Why do you take a bus?</span></p>\n\n<p style=\"line-height:130%; font-size:10.5pt\" title=\"\"><span style=\"\">D.</span><span style=\"\">How long does it take her to ride a bike?</span></p>\n\n<p style=\"line-height:130%; font-size:10.5pt\" title=\"\"><span style=\"\">&nbsp;</span></p>\n\n<p style=\"line-height:130%; font-size:10.5pt\" title=\"\"><span style=\"\">Tom:</span><span style=\"\">Where does your mother work?</span></p>\n\n<p style=\"line-height:130%; font-size:10.5pt\" title=\"\"><span style=\"\">Lucy:</span><span style=\"\">At the radio station.</span></p>\n\n<p style=\"line-height:130%; font-size:10.5pt\" title=\"\"><span style=\"\">Tom:</span><u><span style=\"\"> 12</span></u></p>\n\n<p style=\"line-height:130%; font-size:10.5pt\" title=\"\"><span style=\"\">Lucy:</span><span style=\"\">Usually she rides a bike. Sometimes she takes a bus.</span></p>\n\n<p style=\"line-height:130%; font-size:10.5pt\" title=\"\"><span style=\"\">Tom:</span><u><span style=\"\"> 13</span></u></p>\n\n<p style=\"line-height:130%; font-size:10.5pt\" title=\"\"><span style=\"\">Lucy:</span><span style=\"\">About I5 minutes.</span></p>\n\n<p style=\"line-height:130%; font-size:10.5pt\" title=\"\"><span style=\"\">Tom:</span><span style=\"\">What about the bus?</span></p>\n\n<p style=\"line-height:130%; font-size:10.5pt\"><span style=\"\">Lucy:</span><span style=\"\">Wow! That's a long time, It takes her about 25 minutes.</span></p>\n\n<p style=\"line-height:130%; font-size:10.5pt\" title=\"\"><span style=\"\">Tom:</span><u><span style=\"\">&nbsp; 14</span></u></p>\n\n<p style=\"line-height:130%; font-size:10.5pt\"><span style=\"\">Lucy:</span><span style=\"\">Because there are too many cars and buses on the road(</span><span style=\"\">路</span><span style=\"\">)</span></p>\n\n<p style=\"line-height:130%; font-size:10.5pt\" title=\"\"><span style=\"\">Tom:</span><span style=\"\">Oh, I see.</span></p>\n",
                    name: "question"
                },
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-5',
                            text: 'B'
                        },
                        {
                            value: 'C-0',
                            text: 'C'
                        },
                        {
                            value: 'D-0',
                            text: 'D'
                        }
                    ],
                    colCount: 4,
                    isRequired: true,
                    name: 'question12',
                    title: "题()"
                },
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-0',
                            text: 'B'
                        },
                        {
                            value: 'C-0',
                            text: 'C'
                        },
                        {
                            value: 'D-5',
                            text: 'D'
                        }
                    ],
                    colCount: 4,
                    isRequired: true,
                    name: 'question13',
                    title: "题()"
                },
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-5',
                            text: 'A'
                        },
                        {
                            value: 'B-0',
                            text: 'B'
                        },
                        {
                            value: 'C-0',
                            text: 'C'
                        },
                        {
                            value: 'D-0',
                            text: 'D'
                        }
                    ],
                    colCount: 4,
                    isRequired: true,
                    name: 'question14',
                    title: "题()"
                }
            ],
            name: 'page12'
        },
        {
            elements: [
                {
                    type: "html",
                    html: "\n<p style=\"text-align:center; line-height:150%; font-size:10.5pt\" title=\"\"><span style=\"\">（一）</span></p>\n\n<p style=\"line-height:150%; font-size:10.5pt\" title=\"\"><span style=\"\">Last week Mrs. Milly went to London. She does not know London very well, and she lost her way. Suddenly, she saw a man near a bus stop. \"I can ask him the way,” she said to herself.&nbsp; “Excuse me,” she said. “Can you tell me the way to King Street, please?” The man smiled pleasantly. He did not understand English! He was a tourist. Then he put his hand into his pocket, and took out a phrasebook. He opened the book and found a phrase. He read the phrase slowly.\" I am sorry,\" he said</span><span style=\"\">,</span><span style=\"\">\" I do not speak English.”</span></p>\n\n<p style=\"line-height:150%; font-size:10.5pt\" title=\"\"><span style=\"\">判断正误，正确的在（</span><span style=\"\"> </span><span style=\"\">）内写</span><span style=\"\">T</span><span style=\"\">，错误的写</span><span style=\"\">F</span><span style=\"\">：</span></p>\n\n<p style=\"line-height:150%; font-size:10.5pt\" title=\"\"><span style=\"\">15. Mrs. Milly asked a man the way to a bus stop.</span></p>\n\n<p style=\"line-height:150%; font-size:10.5pt\" title=\"\"><span style=\"\">16. The man didn’t know the way to King Street.</span></p>\n\n<p style=\"line-height:150%; font-size:10.5pt\" title=\"\"><span style=\"\">17. The phrasebook is an English book.</span></p>\n",
                    name: "question"
                },
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'T-0',
                            text: 'T'
                        },
                        {
                            value: 'F-5',
                            text: 'F'
                        }
                    ],
                    colCount: 4,
                    isRequired: true,
                    name: 'question15',
                    title: "题()"
                },
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'T-5',
                            text: 'T'
                        },
                        {
                            value: 'F-0',
                            text: 'F'
                        }
                    ],
                    colCount: 4,
                    isRequired: true,
                    name: 'question16',
                    title: "题()"
                },
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'T-5',
                            text: 'T'
                        },
                        {
                            value: 'F-0',
                            text: 'F'
                        }
                    ],
                    colCount: 4,
                    isRequired: true,
                    name: 'question17',
                    title: "题()"
                }
            ],
            name: 'page14'
        },
        {
            elements: [
                {
                    type: "html",
                    html: "\n<p style=\"text-align:center; line-height:150%; font-size:10.5pt\" title=\"\"><span style=\"\">（二）</span></p>\n\n<p style=\"line-height:150%; font-size:10.5pt\" title=\"\"><span style=\"\">It’s Kids’ Week at Big Mountain Ski Resort! From December 27 to January 2</span><span style=\"\">，</span><span style=\"\">Children can ski for half price!</span></p>\n\n<p style=\"line-height:150%; font-size:10.5pt\" title=\"\"><span style=\"\">Kids will also receive:</span></p>\n\n<p style=\"line-height:150%; font-size:10.5pt\"><span style=\"\">—Free hat!</span></p>\n\n<p style=\"line-height:150%; font-size:10.5pt\"><span style=\"\">—Coupon(</span><span style=\"\">礼券</span><span style=\"\">) for one free hot chocolate at the Pine Lodge Café!</span></p>\n\n<p style=\"line-height:150%; font-size:10.5pt\" title=\"\"><span style=\"\">—Free 1-hour ski or snowboard lesson!</span></p>\n\n<p style=\"line-height:150%; font-size:10.5pt\" title=\"\"><span style=\"\">Must be 14 or younger.</span></p>\n\n<p style=\"line-height:150%; font-size:10.5pt\" title=\"\"><span style=\"\">Come to Big Mountain for lots of fun and great prizes!</span></p>\n\n<p style=\"line-height:150%; font-size:10.5pt\" title=\"\"><span style=\"\">18. This advertisement is for _____.</span></p>\n\n<p style=\"line-height:150%; font-size:10.5pt\"><span style=\"\">A. school students</span></p>\n\n<p style=\"line-height:150%; font-size:10.5pt\"><span style=\"\">B. the students at 14</span></p>\n\n<p style=\"line-height:150%; font-size:10.5pt\" title=\"\"><span style=\"\">C. the kids who are 14 or younger</span></p>\n\n<p style=\"line-height:150%; font-size:10.5pt\" title=\"\"><span style=\"\">D. all the kids</span></p>\n\n<p style=\"line-height:150%; font-size:10.5pt\" title=\"\"><span style=\"\">19. A kid will get many things at Big Mountain Ski Resort except</span><u><span style=\"\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></u><span style=\"\">.</span></p>\n\n<p style=\"line-height:150%; font-size:10.5pt\" title=\"\"><span style=\"\">A. free hat</span></p>\n\n<p style=\"line-height:150%; font-size:10.5pt\" title=\"\"><span style=\"\">B. coupon for one free hot chocolate</span></p>\n\n<p style=\"line-height:150%; font-size:10.5pt\" title=\"\"><span style=\"\">C. free 1-hour snowboard lesson</span></p>\n\n<p style=\"line-height:150%; font-size:10.5pt\" title=\"\"><span style=\"\">D. a ski contest</span></p>\n\n<p style=\"line-height:150%; font-size:10.5pt\" title=\"\"><span style=\"\">20. If a 13-year-old boy usually pay </span><span style=\"\">￡</span><span style=\"\">60 to ski, he will pay ___ on December 28th.</span></p>\n\n<p class=\"4\" style=\"text-indent:0pt\" title=\"\">A. <span style=\"\">￡</span>120</p>\n\n<p class=\"4\" style=\"text-indent:0pt\">B. <span style=\"\">￡</span>60</p>\n\n<p class=\"4\" style=\"text-indent:0pt\">C. <span style=\"\">￡</span>30</p>\n\n<p class=\"4\" style=\"text-indent:0pt\" title=\"\">D. <span style=\"\">￡</span>15</p>\n",
                    name: "question"
                },
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-0',
                            text: 'B'
                        },
                        {
                            value: 'C-5',
                            text: 'C'
                        },
                        {
                            value: 'D-0',
                            text: 'D'
                        }
                    ],
                    colCount: 4,
                    isRequired: true,
                    name: 'question18',
                    title: "题()"
                },
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-0',
                            text: 'B'
                        },
                        {
                            value: 'C-0',
                            text: 'C'
                        },
                        {
                            value: 'D-5',
                            text: 'D'
                        }
                    ],
                    colCount: 4,
                    isRequired: true,
                    name: 'question19',
                    title: "题()"
                },
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-0',
                            text: 'B'
                        },
                        {
                            value: 'C-5',
                            text: 'C'
                        },
                        {
                            value: 'D-0',
                            text: 'D'
                        }
                    ],
                    colCount: 4,
                    isRequired: true,
                    name: 'question20',
                    title: "题()"
                }
            ],
            name: 'page15'
        }
    ]
};
export default SurveyQuestion;