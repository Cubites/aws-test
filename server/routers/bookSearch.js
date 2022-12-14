const router = require('express').Router();

const ConnectionPool = require('../modules/ConnectionPool');

router.post('/api/db', async (req, res, next) => {
    console.log('2-1. 책 검색');
    try{
        const conn = await ConnectionPool.getConnection();
        try{
            // 1. 검색어에 대한 책 목록 조회
            // * 로그인 상태인 경우 - 로그인한 유저가 좋아요한 책인가 정보 요청
            // * 로그인 상태가 아닌 경우 - 로그인한 유저가 좋아요한 책인가 정보 요청 X
            let books = await conn.query(`
                SELECT 
                    bk.isbn
                    , bk.book_title
                    , bk.image_url
                    , bk.author
                    , bk.publisher
                    , bk.publication
                    , bk.discount
                    , bk.sale_link
                    , (SELECT COUNT(*) FROM book_favor bf1 WHERE bf1.isbn = bk.isbn) as like_num
                FROM book bk
                WHERE book_title LIKE '%${''}%'
                ORDER BY bk.publication DESC
                LIMIT 10;
            `);
            conn.release();
            res.status(200).send(books);
        }catch(err){
            conn.release();
            console.log('2-1-2. 책 검색 처리 중 에러');
            console.log(err);
            res.status(404).send({success: false, err: err});
        }
    }catch(err){
        console.log('2-1-2. DB 연결 에러');
        console.log(err);
        res.status(404).send({success: false, err: err});
    }
});

module.exports = router;