# 찬밥신세

## API Document

* POST iwin247.info:3355/search

>Params

    maxPrice : 최대 가격

    minPrice : 최소 가격

    pm : 오차

    category : ["카테고리","카테고리","카테고리"] 배열

>Response

    음식점 배열
    ex)
    [
        {
            "_id": {
                "$oid": "5aa529c2fd812a832b20efe6"
            },
            "name": "빨봉분식 숙명여대점",
            "address": "서울 용산구 청파로47길 71 2층",
            "category": "분식",
            "minPrice": 3000,
            "x": 126.9664581,
            "y": 37.5448495,
            "menus": [
                {
                    "name": "빨봉떡볶이",
                    "price": "5000"
                },
                {
                    "name": "치즈떡볶이",
                    "price": "5000"
                },
                {
                    "name": "라면떡볶이",
                    "price": "4000"
                },
                {
                    "name": "라면",
                    "price": "3000"
                },
                {
                    "name": "쫄면",
                    "price": "5000"
                },
                {
                    "name": "볶음밥",
                    "price": "5000"
                },
                {
                    "name": "해물볶음밥",
                    "price": "6500"
                }
            ]
        },
        {
            "_id": {
                "$oid": "5aa529befd812a832b20efbf"
            },
            "name": "쌍대포 본점",
            "address": "서울 용산구 청파로 291",
            "category": "한식",
            "minPrice": 10000,
            "x": 126.9700167,
            "y": 37.5455785,
            "menus": [
                {
                    "name": "생오겹살 (160g)",
                    "price": "11000"
                },
                {
                    "name": "생삼겹살 (160g)",
                    "price": "10000"
                },
                {
                    "name": "생목등심 (160g)",
                    "price": "10000"
                },
                {
                    "name": "생항정살 (160g)",
                    "price": "11000"
                },
                {
                    "name": "생통갈매기살 (160g)",
                    "price": "12000"
                },
                {
                    "name": "생가브리살 (160g)",
                    "price": "10000"
                },
                {
                    "name": "양념돼지왕구이 (300g)",
                    "price": "11000"
                }
            ]
        },
    ]
