

const reviewStore = {
    state: {
        review:[]
    },

    mutations: {
        submitReview: function (state, payload) {
            state.review.push({"user_id" : payload.user_id, 
                                "user_name" : payload.user_name, 
                                "date" : payload.date, 
                                "review_number" : payload.review_number,
                                "room_number" : payload.room_number,
                                "contents" : payload.contents,
                                "score" : payload.score});
        },
        initReviewList: function (state, payload){
            state.review = payload
        }

    }
}

export default reviewStore