const logiGuide = [
	{
		title: '구매시 주의사항',
		detail: `<ul style="list-style-type:disc; font-size:14px">
        <li style="margin-bottom: 5px;">본 상품은 해외배송 상품으로, 결제완료 후 단순변심으로 인한 취소/교환이 어렵습니다. 신중히 결정해 주시기 바랍니다. (취소/교환/반품 안내 참고)</li>
        <li style="margin-bottom: 5px;">해외배송 지연으로 인한 취소는 단순반품과 동일한 비용이 청구됩니다. 신중히 결정해 주시기 바랍니다. (배송 안내 참고)</li>
        <li style="margin-bottom: 5px;">유럽 현지 상품으로, 국내배송과 포장상태 및 구성품이 다를 수 있습니다.</li>
        <li style="margin-bottom: 5px;">색상은 빛과 모니터 화면에 따라 다를 수 있습니다.</li>
        <li style="margin-bottom: 5px;">사이즈는 재는 위치에 따라 약간의 차이가 있을 수 있습니다.</li>
        <li style="margin-bottom: 5px;">브랜드박스와 더스트백은 운송 중 훼손 및 오염될 수 있습니다.</li>
        <li style="margin-bottom: 5px;">작은 얼룩, 미세한 주름, 점 등은 본연의 가죽 특성을 최대한 살리기 위한 작업으로 인하여 발생한 것입니다.</li>
        <li style="margin-bottom: 5px;">명품의 경우 수작업으로 진행되어 박음질, 유약 등이 일정하지 않을 수 있으며 미세 스크래치가 있을 수 있습니다.</li>
        <li style="margin-bottom: 5px;">입고 시기마다 제품의 구성 및 이미지의 차이가 있을 수 있습니다.</li>
        <li style="margin-bottom: 5px;">선글라스나 안경테의 경우, 피팅을 하지 않은 상태에서 제품을 받으셨기 때문에 좌우 균형이 맞지 않거나 고객님 얼굴에 맞지 않을 수 있습니다. 이런 경우 가까운 안경점에서 피팅을 받으시면, 고객님 얼굴에 맞게 착용하실 수 있습니다.</li>
        <li style="margin-bottom: 5px;">주문 후 유럽 현지 거래처의 품절, 자연재해, 운송관련 노조 파업 등으로 배송이 지연되거나 주문이 취소될 수 있습니다.</li>
        <li style="margin-bottom: 5px;">제조국(원산지)은 브랜드 제품에 따라 상이합니다.</li>
        <li style="margin-bottom: 5px;">상품별로 제조 공장이 여러 나라에 분포되어 있으며 제조국이 중국, 베트남, 태국, 이탈리아, 영국, 프랑스 등으로 명시되어 있습니다.</li>
        <li style="margin-bottom: 5px;">모든 상품은 제조과정을 거쳐 본사에서 꼼꼼한 상품검수 후 입고되는 100% 정품입니다.</li>
      </ul>`
	},
	{
		title: '취급 시 주의사항',
		detail: `<ul style="list-style-type:disc; font-size:14px">
        <li style="margin-bottom: 5px;">습기(비, 물에서 발생하는 것 포함)나 열기로 인해 상품의 소재가 변질되거나 이염될 수 있습니다.</li>
        <li style="margin-bottom: 5px;">가죽(애나멜 가죽 포함)의 경우 마찰 등에 의해 테두리나 표면의 갈라짐이 발생할 수 있으므로 주의가 필요합니다.</li>
        <li style="margin-bottom: 5px;">금속의 경우 주위의 환경에 따라 변색이 있을 수 있습니다.</li>
        <li style="margin-bottom: 5px;">모든 소재의 가방은 미사용 시 건냉한 실내에서 더스트백에 보관하여 주시기 바랍니다.</li>
      </ul>`
	},
	{
		title: '배송비 관부가세 안내',
		detail: `<ul style="list-style-type:disc; font-size:14px">
        <li style="margin-bottom: 5px;">모든 상품은 유럽에서 직접 배송됩니다.</li>
        <li style="margin-bottom: 5px;">본 상품 가격은 배송비, 관부가세가 포함된 가격입니다.</li>
        <li style="margin-bottom: 5px;">따라서 상품 통관 시 관부가세를 따로 지불하지 않아도 됩니다.</li>
      </ul>`
	},
	{
		title: '배송 안내',
		detail: `<ul style="list-style-type:disc; font-size:14px">
        <li style="margin-bottom: 5px;">프리오더 상품은 해외배송 상품으로, 결제 완료 후 영업일 기준 15일(토, 일, 공휴일 제외) 이내 발송됩니다.</li>
        <li style="margin-bottom: 5px;">빠른배송 상품은 해외배송 상품으로, 결제 완료 후 영업일 기준 7일(토, 일, 공휴일 제외) 이내 발송됩니다.</li>
        <li style="margin-bottom: 5px;">당일배송 상품은 국내배송 상품으로, 결제 완료 후 영업일 기준 2일(토, 일 공휴일 제외) 이내 발송됩니다.</li>
        <li style="margin-bottom: 5px;">국내배송은 CJ대한통운(1588-1255)을 통해 이루어 지고 있습니다.</li>
        <li style="margin-bottom: 5px;">현지 상황 및 항공사정, 세관통관절차에 따라 결제 완료 휴 영업일 기준 7일(토, 일, 공휴일 제외) 정도 지연될 수 있습니다.</li>
        <li style="margin-bottom: 5px;">해외 현지 거래처의 규정상 택 또는 바코드 등이 일부 제거되거나, 구성품이 일부 포함되지 않은 상태로 수입되는 경우가 있으며, 이는 상품의 하자가 아니오니 참고하여 주시기 바랍니다.</li>
      </ul>`
	},
	{
		title: '취소/반품 안내',
		detail: `<ul style="list-style-type:disc; font-size:14px">
        <li style="margin-bottom: 5px;">주문 후 상품은 즉시 패킹 및 배송이 시작되어 교환이 불가하며 취소/반품 프로세스로 진행됩니다.</li>
        <li style="margin-bottom: 5px;">반품 시 반드시 워런티 카드를 지참해야 합니다.</li>
        <li style="margin-bottom: 5px;">취소/반품 프로세스는 판매자의 귀책의 경우 무상으로 진행됩니다.</li>
        <li style="margin-bottom: 5px;" style="list-style-type: circle; text-indent:20px">상품 하자 및 오배송</li>
        <li style="margin-bottom: 5px;">취소/반품 프로세스는 소비자 귀책으로 인한 취소/반품 시, 최초 배송비와 취소/반품 배송비를 소비자가 부담합니다.</li>
        <li style="margin-bottom: 5px;" style="list-style-type: circle; text-indent:20px">단순 변심으로 인한 취소/반품 요청</li>
        <li style="margin-bottom: 5px;">반품 프로세스는 사용 방지 택 제거, 상품 훼손, 구성품 분실 또는 반품 신청기한 초과 (수령일 기준 7 일 이내) 시에는 반품이 불가합니다.</li>
        <li style="margin-bottom: 5px;">취소/반품 배송비 [상품가액의 10%에 해당하는 위약금(수입관세 약 10% + 통관 수수료 + 창고료), 현지 배송비, 항공 배송비, 국내 배송비, 포장비, 검수비에 해당하는 10만원</li>
        <li style="margin-bottom: 5px;">명품의 경우 대부분 수작업으로 생산되어 제품의 봉제 상태/본드 자국/마감처리/패턴 차이 등이 발생할 수 있습니다. 이는 수작업 제품의 특징이며, 이에 따른 반품의 경우 단순 변심으로 간주하여 처리됩니다.</li>
        <li style="margin-bottom: 5px;">취소/반품은 그린데이즈 고객센터를 통해 신청할 수 있습니다.</li>
        <li style="margin-bottom: 5px;">재화 등의 공급을 받거나 공급이 개시된 날부터 7일이 지난 경우</li>
        <li style="margin-bottom: 5px;">소비자의 과실에 의한 제품의 멸실 또는 훼손된 경우</li>
        <li style="margin-bottom: 5px;">사용에 의한 제품의 가치가 현저히 감소한 경우</li>
        <li style="margin-bottom: 5px;">(상품라벨, 박스 등의 구성품 분리, 제거, 훼손, 오배송도 해당)</li>
        <li style="margin-bottom: 5px;">복제가 가능한 재화 등의 포장을 훼손한 경우</li>
        <li style="margin-bottom: 5px;">찾기 쉬운 생활 법령 정보 - <a href='https://www.reddays.kr/data/pdf/shop_law.pdf'>인터넷 쇼핑편</a></li>
      </ul>`
	},
	{
		title: 'A/S 안내',
		detail: `<ul style="list-style-type:disc; font-size:14px">
        <li style="margin-bottom: 5px;">A/S는 그린데이즈 고객센터를 통해 안내받을 수 있습니다.</li>
        <li style="margin-bottom: 5px;">A/S를 안내받기 위해서는 반드시 워런티 카드를 지참해야 합니다.</li>
        <li style="margin-bottom: 5px;">해외 구매 상품은 국내 매장에서 A/S가 불가합니다. 수선이 필요한 경우 명품 수선 업체를 이용해야 합니다.</li>
        <li style="margin-bottom: 5px;">보증기간 이내 제품의 하자로 인한 A/S는 무상으로 진행되며, 사용상의 부주의로 인한 부분은 유상으로 처리됩니다.</li>
        <li style="margin-bottom: 5px;">모든 제품의 A/S 진행 시 부속품의 파손으로 인한 교체가 필요한 경우, 유사한 부속품으로 대체될 수 있으며 일부 제품의 경우 A/S가 어려울 수 있으니 유의하여 주시기 바랍니다.</li>
      </ul>`
	},
	{
		title: '품질보증 안내',
		detail: `<ul style="list-style-type:disc; font-size:14px">
        <li style="margin-bottom: 5px;">제품에 대한 품질보증은 구입일로부터 12개월간 유지됩니다.</li>
        <li style="margin-bottom: 5px;">기타 사항은 소비자기본법에 따른 소비자 분쟁해결 기준에 따라 피해를 보상 받을 수 있습니다.</li>
        <li style="margin-bottom: 5px;">더 궁금하신 사항은 고객센터로 문의주시면 친절히 안내해드리겠습니다.</li>
      </ul>`
	}
];
const faqList = [
	{
		title: '예약구매는 무엇인가요',
		detail: `<ol style="margin-bottom: 5px;">
        <li style="margin-bottom: 5px;">그린데이즈는 상품을 예약받고 입고 시 알림을 발송해드리는 서비스입니다.</li>
        <li style="margin-bottom: 5px;">PICK은 구매가 아닌 예약입니다.</li>
        <li style="margin-bottom: 5px;">그린데이즈에서는 이런 방식 때문에 명품을 가장 합리적인 가격에 구매할 수 있습니다.</li>
        <li style="margin-bottom: 5px;">상품은 매일 업데이트되니, 구경해보시고 마음에 드는 상품을 PICK(예약) 해보세요.</li>
      </ol>`
	},
	{
		title: 'PICK 상품을 바로 살 수 있나요?',
		detail: `<ol style="margin-bottom: 5px;">
        <li style="margin-bottom: 5px;">PICK은 상품을 즉시 구매할 수 없습니다.</li>
        <li style="margin-bottom: 5px;">원하는 상품을 PICK(예약)하고, 해당 상품이 입고되면 구매할 수 있는 시스템입니다.</li>
        <li style="margin-bottom: 5px;">PICK한 상품이 입고되면 알림이 발송되니 참고해주세요.</li>
      </ol>`
	},
	{
		title: 'PICK한 상품은 언제 입고되나요?',
		detail: `<ol style="margin-bottom: 5px;">
        <li style="margin-bottom: 5px;">각 상품별 입고시기는 정확하게 파악할 수 없지만, 빠르면 1-2주, 늦으면 1개월 이상 소요될 수 있습니다.</li>
        <li style="margin-bottom: 5px;">시즌이 지난 상품 혹은 인기 신상품의 경우 품절 될 확률이 높기 때문에 재입고가 지연될 수 있습니다.</li>
        <li style="margin-bottom: 5px;">상품이 한번이라도 입고된다면, 그린데이즈에 상품이 등록됩니다.</li>
        <li style="margin-bottom: 5px;">고객님이 PICK(예약)하신 모든 상품이 재입고되지는 않는다는 점 참고 부탁드립니다.</li>
      </ol>`
	},
	{
		title: '제품이 왜 이렇게 저렴한가요?',
		detail: `<ol style="margin-bottom: 5px;">
        <li style="margin-bottom: 5px;">그린데이즈는 상품을 예약받고, 국내 사전 입고물량과 함께 대량으로 수입하는 병행수입 기업입니다.</li>
        <li style="margin-bottom: 5px;">소매가 아닌 도매를 하기 때문에 상대적으로 가격이 저렴합니다.</li>
      </ol>`
	},
	{
		title: '프리오더는 무엇인가요?',
		detail: `<ol style="margin-bottom: 5px;">
        <li style="margin-bottom: 5px;">프리오더는 한정된 시간동안 명품을 세일하는 서비스입니다.</li>
        <li style="margin-bottom: 5px;">프리오더는 비정기적으로 오픈되며, PICK한 상품 또는 브랜드가 프리오더에 포함되면 메시지를 발송해 소식을 알려드립니다.</li>
      </ol>`
	},
	{
		title: '정품 맞나요?',
		detail: `<ol style="margin-bottom: 5px;">
        <li style="margin-bottom: 5px;">그린데이즈의 모든 상품은 현지 브랜드사에서 공급받는 상품으로 100% 정품입니다.</li>
        <li style="margin-bottom: 5px;">또한 그린데이즈에서는 별도의 셀러가 판매하는 방식이 아닌,</li>
        <li style="margin-bottom: 5px;">그린데이즈가 직접 구매해 판매하기 때문에 가품은 존재할 수 없습니다.</li>
        <li style="margin-bottom: 5px;">국내 면세점 및 편집샵에 입고되는 상품과 동일한 상품이니 참고해주세요.</li>
      </ol>`
	},
	{
		title: '통관 비용은 따로 없나요?',
		detail: `<ol style="margin-bottom: 5px;">
        <li style="margin-bottom: 5px;">모든 상품가격은 대행 수수료, 국제 운송료, 통관 수수료, 관세 및 부가세가 전부 포함된 가격입니다.</li>
        <li style="margin-bottom: 5px;">따라서 상품 통관 시 관세 및 부가세를 따로 지불하지 않으셔도 됩니다.</li>
      </ol>`
	},
	{
		title: '구성품과 포장상태는 어떻게 되나요?',
		detail: `<ol style="margin-bottom: 5px;">
        <li style="margin-bottom: 5px;">기본적인 구성품은 현지에서 브랜드사에게 공급받는 그대로입니다.</li>
        <li style="margin-bottom: 5px;">통관 후 검수/포장 과정에서 초기 구성품과 그린데이즈 워런티카드가 포함됩니다.</li>
        <li style="margin-bottom: 5px;">브랜드 쇼핑백은 포함되지 않습니다.</li>
      </ol>`
	},
	{
		title: '주문했는데 상품은 언제 받을 수 있나요?',
		detail: `<ol>
        <li style="margin-bottom: 5px;">모든 상품은 유럽에서 국내까지 긴 배송 과정을 거칩니다.</li>
        <li style="margin-bottom: 5px;">일반적인 배송일은 아래와 같습니다.</li>
        <li style="margin-bottom: 5px;">단, 물류사/세관 이슈로 배송이 지연될 수 있으니 양해 부탁드립니다.</li>
        <li style="margin-bottom: 5px;">프리오더: 영업일 기준 15일 이내 발송</li>
        <li style="margin-bottom: 5px;">빠른배송: 영업일 기준 7일 이내 발송</li>
        <li style="margin-bottom: 5px;">당일발송: 영업일 기준 2일 이내 발송</li>
        <li style="margin-bottom: 5px;">[마이페이지 - 주문 및 반품 내역]에서 실시간 배송현황을 확인할 수 있습니다.</li>
      </ol>`
	},
	{
		title: '명품의 워런티 카드(보증서)가 모든 제품마다 다 들어가 있나요?',
		detail: `<ol>
        <li style="margin-bottom: 5px;">보증서의 경우 샤넬, 프라다 등의 일부 브랜드에서는 구성품으로 포함되어 있으나,</li>
        <li style="margin-bottom: 5px;">대부분의 브랜드에는 구성품으로 포함되어 있지 않습니다.</li>
        <li style="margin-bottom: 5px;">백화점의 경우 국내 수입원이 각 회사에 맞게 보증서를 제작해 구성품으로 포함합니다.</li>
        <li style="margin-bottom: 5px;">그린데이즈에서는 워런티카드를 제작해 구성품으로 포함하니 참고해주세요.</li>
      </ol>`
	},
	{
		title: '제조국(원산지)은 어떻게 되나요?',
		detail: `<ol>
        <li style="margin-bottom: 5px;">제조국(원산지)은 브랜드 제품에 따라 상이합니다.</li>
        <li style="margin-bottom: 5px;">상품별로 제조 공장이 여러 나라에 분포되어 있으며 제조국이 중국, 베트남, 태국, 이탈리아, 영국, 프랑스 등으로 명시되어 있습니다.</li>
      </ol>`
	},
	{
		title: '알림설정은 어떻게 하나요?',
		detail: `<ol>
      <li style="margin-bottom: 5px;">로그인 하신 후 [마이페이지 - 알림설정] 에서 알림을 [ON/OFF] 하실 수 있습니다.</li>
    </ol>`
	},
	{
		title: 'A/S는 어떻게 처리되나요?',
		detail: `<ol>
        <li style="margin-bottom: 5px;">A/S의 경우 워런티카드를 지참해 그린데이즈 고객센터에서 상담을 받아보시고, 상품을 발송하시면 됩니다.</li>
        <li style="margin-bottom: 5px;">A/S는 압구정 갤러리아 백화점과 동일한 명품 전문수선 업체에서 진행하며,</li>
        <li style="margin-bottom: 5px;">수선 여부 및 비용은 수선업체에 확인 후 고객님께 안내해드리고 있습니다.</li>
        <li style="margin-bottom: 5px;">상품별로 A/S 진행 범위, 방법, 기간은 상이할 수 있으니 참고 부탁드립니다.</li>
      </ol>`
	},
	{
		title: '명품인데 가죽에 미세한 스크래치나 얼룩이 있어요. 불량 아닌가요?',
		detail: `<ol>
        <li style="margin-bottom: 5px;">명품은 오랜 기간 숙련된 장인이 일일이 제작한 수공예품으로 바늘땀이나 마감처리 등</li>
        <li style="margin-bottom: 5px;">제작 상태가 공산품처럼 기계로 찍어내듯 동일하지 않을 수 있습니다.</li>
        <li style="margin-bottom: 5px;">최상의 가죽을 사용하더라도 천연가죽 고유의 결이나 스크래치, 얼룩, 점 등이 남아있을 수 있습니다.</li>
        <li style="margin-bottom: 5px;">이는 제품의 불량이 아닙니다.</li>
      </ol>`
	},
	{
		title: '취소/교환/반품은 어떻게 되나요?',
		detail: `<ol>
        <li style="margin-bottom: 5px;">모든 제품은 해외배송 상품으로 주문 후 이용약관 제11조 2항에 의거 교환이 불가능하며 취소/반품이 어렵습니다.</li>
        <li style="margin-bottom: 5px;">또한, 반품 시 반드시 그린데이즈 워런티 카드를 지참해야 하며, 사용방지 택 제거, 시착으로 인한 상품훼손, 구성품분실 또는 반품신청기한 초과(수령일 기준 7일 이내)시에는 반품이 불가한 점 참고 부탁드립니다.</li>
        <li style="margin-bottom: 5px;">프리오더 상품을 반드시 취소/반품 하기를 원한다면, 상품가액의 10%에 해당하는 위약금(수입관세 약 10% + 통관 수수료 + 창고료),</li>
        <li style="margin-bottom: 5px;">현지 배송비, 항공 배송비, 국내 배송비, 포장비, 검수비에 해당하는 10만 원을 소비자가 부담해야 합니다.</li>
        <li style="margin-bottom: 5px;">빠른배송 상품의 경우 검수비, 포장비, 최초 배송비와 반품 배송비에 해당하는 3만 원만을 소비자가 부담해야 합니다.</li>
      </ol>`
	},
	{
		title: '반품 비용이 왜 이렇게 비싼가요?',
		detail: `<ol>
        <li style="margin-bottom: 5px;">프리오더 상품은 해외배송 상품으로 대행 수수료에 해당하는 상품가액의 10%에 해당하는 위약금(수입관세 약 10% + 통관 수수료 + 창고료),</li>
        <li style="margin-bottom: 5px;">현지 배송비, 항공 배송비, 국내 배송비, 포장비, 검수비를 고려해야 하기 때문에 반품 비용이 높게 책정됩니다.</li>
        <li style="margin-bottom: 5px;">빠른배송 상품의 경우 검수비 + 포장비 + 최초/반품 배송비를 고려해야 하기 때문에 반품 비용이 높게 책정됩니다.</li>
      </ol>`
	},
	{
		title: '상품가격이 변동될 수 있나요?',
		detail: `<p>그린데이즈의 상품가격은 입고시기에 따라 변동될 수 있습니다.</p>
    <ol>
      <li style="margin-bottom: 5px;">이탈리아에서 입고되는 상품의 공급가 및 환율이 매번 변동되기 때문입니다.</li>
      <li style="margin-bottom: 5px;">시장가격을 기준으로 상품가격이 상시 조정되기 때문입니다.</li>
    </ol>`
	}
];
const terms = `
  <h1 style="line-height: 150%; margin-bottom: 10px;">이용약관</h1>
  <h2 style="line-height: 150%; margin: 30px 0;">이 약관은 공정거래위원회에서 지정한 해외구매(위임형,쇼핑몰형 구매대행) 표준약관(2016. 10. 14. 제정)에 근거합니다.</h2>
  <ol style="line-height: 150%; margin: 5px 0;">
    <li style="margin: 5px 0">
      <h2 style="line-height: 150%; margin: 30px 0;">제1조(목적)</h2>
      <articl style="line-height: 200%">이 약관은 (주)그린데이즈 (이하 "회사")가 제공하는 위임형,쇼핑몰형 구매대행 관련 서비스(이하 “서비스”)를 이용함에 있어 회사와 이용자 간의 권리·의무, 책임사항 및 절차 등을 규정함을 목적으로 합니다.</articl margin: 5px 0;e>
    </li>
    <li style="margin: 5px 0">
      <h2 style="line-height: 150%; margin: 30px 0;">제2조(정의) 이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</h2>
      <ol style="line-height: 150%; margin: 5px 0;">
        <li style="margin: 5px 0">
          “몰”은 회사가 이 약관에 의하여 해외에서 구매 가능한 재화 또는 서비스(이하 “재화 등”)을 이용자에게 제공하기 위하여 정보통신설비와 정보통신망을 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 “몰”을 운영하는 회사의 의미로도 사용합니다.
        </li>
        <li style="margin: 5px 0">
          “이용자”라 함은 회사가 제공하는 서비스를 이용하는 자를 말합니다. 
        </li>
        <li style="margin: 5px 0">
          “해외사업자”라 함은 대한민국 이외의 국적이거나 대한민국 이외의 국가에 사업자 등록, 법인, 영업소, 호스트서버 소재지 등을 가진 사업자를 의미합니다.
        </li>
        <li style="margin: 5px 0">
          “위임형 구매대행”이라 함은 이용자가 재화 등에 대하여 회사에 구매해 줄 것을 의뢰하면 회사가 구매 관련 업무 처리를 제공하는 서비스를 의미합니다.
        </li>
        <li style="margin: 5px 0">
          “구매대행 수수료”는 회사가 위임형 구매대행 서비스 제공의 대가로 이용자에게 청구하는 서비스 이용료를 의미합니다.
        </li>
        <li style="margin: 5px 0">
          “검수”라 함은 이용자가 구매대행을 신청한 재화 등의 누락, 하자, 파손 여부 등을 회사가 정한 기준에 따라 확인하는 서비스를 의미합니다.
        </li>
      </ol>
    </li>
    <li style="margin: 5px 0">
      <h2 style="line-height: 150%; margin: 30px 0;">제3조(서비스의 제공) 회사는 이용자를 위하여 선량한 관리자의 주의의무로써 다음 각 호의 업무를 처리할 수 있습니다.</h2>
      <ol style="line-height: 150%; margin: 5px 0;">
        <li style="margin: 5px 0">
          이용자가 구매 신청한 재화 등의 탐색 및 구매대행 비용 내역 제공
        </li>
        <li style="margin: 5px 0">
          이용자가 구매 신청한 재화 등에 대한 해외사업자와의 사이의 매매 계약의 체결 및 매매대금의 지급
        </li>
        <li style="margin: 5px 0">
          재화 등의 수령, 검수, 포장 및 국제 운송
        </li>
        <li style="margin: 5px 0">
          해외 현지 반품, 교환 및 환불 절차의 대행
        </li>
        <li style="margin: 5px 0">
          통관 절차 대행
        </li>
        <li style="margin: 5px 0">
          국제 반품 운송, 교환 및 환불 절차의 대행
        </li>
        <li style="margin: 5px 0">
          기타 재화 등의 구매에 관련된 제반업무
        </li>
      </ol>
    </li>
    <li style="margin: 5px 0">
      <h2 style="line-height: 150%; margin: 30px 0;">제4조(서비스이용 제한)</h2>
      <ol style="line-height: 150%; margin: 5px 0;">
        <li style="margin: 5px 0">
          <h3 style="line-height: 200%; margin: 30px 0">① 회사는 이용자의 서비스 이용 요청이 다음 각 호의 어느 하나에 해당하는 경우 서비스 제공을 거절하거나, 이용자의 동의를 구하고(다만, 이용자에게 동의를 구할 수 없는 사정이 있는 경우에는 통지 후) 해당 재화 등을 임의 처분하거나 이용자의 비용 부담으로 해외사업자에게 반품할 수 있습니다.</h3>
          <ol style="line-height: 150%; margin: 5px 0;">
            <li style="margin: 5px 0">
              ① 신청내용에 허위, 기재누락, 오기가 있는 경우
            </li>
            <li style="margin: 5px 0">
              ② 이용자가 요청한 서비스의 제공이 회사의 경영상 또는 기술상의 이유로 현저히 곤란한 경우
            </li>
            <li style="margin: 5px 0">
              ③ 이용자가 불법 또는 부당한 목적을 위해 서비스를 이용하는 것으로 판단되는 경우
            </li>
            <li style="margin: 5px 0">
              ④ 동물, 금·은괴, 화폐, 의약품, 무기류, 인체의 일부, 포르노그래피, 정밀금속, 석재류, 냉장보관물품, 냉동 또는 냉장을 요하는 물품 및 폭발물, 가연성 위험물 등
            </li>
            <li style="margin: 5px 0">
              ⑤ 통과국을 포함한 수출입국의 법령에 의하여 수출입이 금지되는 물품
            </li>
            <li style="margin: 5px 0">
              ⑥ 운송 사업자의 운송 약관상 운송이 금지된 물품
            </li>
          </ol>
        </li>
        <li style="margin: 5px 0">
            <h3 style="line-height: 200%; margin: 30px 0">② 전항에 따라 서비스 제공을 거절하는 경우, 회사는 이용자에게 거절의 사유 및 근거를 통지하여야 합니다.</h3>
        </li>
      </ol>
    </li>
    <li style="margin: 5px 0">
      <h2 style="line-height: 150%; margin: 30px 0;">제5조(계약의 성립)</h2>
      <ol style="line-height: 150%; margin: 5px 0;">
        <li style="margin: 5px 0">
          ① 회사는 이용자의 구매대행 신청이 있으면 수신확인통지를 합니다. 수신확인통지에는 신청내역, 금액, 수령 주소 등의 신청 정보와 구매대행 신청의 정정, 취소 등에 관한 정보 등을 포함하여야 합니다.
        </li>
        <li style="margin: 5px 0">
          ② 구매대행 계약은 이용자가 재화 등을 구매해 줄 것을 신청하면 회사가 구매대행 가능 여부를 통지하고 구매대행 수수료를 제시하여 이용자의 청약을 받아 회사의 수신확인통지가 이용자에게 도달한 때에 성립됩니다.
        </li>
        <li style="margin: 5px 0">
          ③ 수신확인통지를 받은 이용자는 의사표시의 불일치 등이 있는 경우 지체 없이 회사에 구매대행 신청 변경 또는 취소를 요청할 수 있으며, 회사는 지체 없이 그 요청에 따라 처리하여야 합니다. 다만 이미 요금을 지급한 경우에는 제11조의 청약철회 등에 관한 규정에 따릅니다.
        </li>
      </ol>
    </li>
    <li style="margin: 5px 0">
      <h2 style="line-height: 150%; margin: 30px 0;">제6조(구매대행비용 및 사후정산)</h2>
      <ol style="line-height: 150%; margin: 5px 0;">
        <li style="margin: 5px 0">
          ① 구매대행 수수료는 이용자가 구매 신청한 재화 등의 판매가격과 해외 현지 운송료 및 해외 현지 제세금을 합산한 금액의 20% 입니다.
        </li>
        <li style="margin: 5px 0">
          ② 회사는 이용자가 재화 등의 구매대행에 필요한 비용 및 구매대행 수수료를 지급하기 전에 해외 사업자의 판매가격과 해외 현지 운송료 및 해외 현지 제세금이 포함된 지급금액, 구매대행 수수료, 국내외 (예상)운송료 등의 형태로 구분하여 이용자에게 통지하여야 합니다.
        </li>
        <li style="margin: 5px 0">
          ③ 회사는 해외사업자의 할인 행사, 환율 변화 등의 사유로 청구 금액에 변동이 있을 때에는 이용자에게 지체 없이 통지하고 차액을 환급하거나 추가비용을 청구할 수 있습니다.
        </li>
        <li style="margin: 5px 0">
          ④ 상품 가격 변경, 관세율표 개정, 품목분류 변경, 전산시스템 오류, 환율차이 등으로 인해 이용자가 지급한 금액과 구매대행 수행 시 발생한 실제 비용 간에 차이가 발생하는 경우 회사는 과부족금액을 사후 정산합니다. 회사는 이러한 금액 차이가 발생할 수 있다는 사실 및 이를 사후 정산해야 함을 계약체결 전에 이용자에게 알기 쉽도록 고지해야 합니다.
        </li>
        <li style="margin: 5px 0">
          ⑤ 판매가격은 해외사업자의 할인 행사, 환율 변화 등의 사유로 변동될 수 있으며, 이로 인하여 회사가 청약을 받은 재화를 공급할 수 없는 경우 그 사유를 이용자에게 알리고 요금을 3영업일 이내에 환급하는 등의 조치를 해야 합니다.
        </li>
      </ol>
    </li>
    <li style="margin: 5px 0">
      <h2 style="line-height: 150%; margin: 30px 0;">제7조(검수)</h2>
      <ol style="line-height: 150%; margin: 5px 0;">
        <li style="margin: 5px 0">
          ① 회사는 이용자가 구매대행을 신청한 재화 등에 대하여 동일성 여부 및 하자·파손 여부, 운송물이 수출입 법령 등에 저촉되지 않는지 여부 등의 확인을 위해 해당 운송물의 개봉·검수를 할 수 있습니다. 회사는 검수의 기준 및 범위를 정하여 이용자에게 미리 통지합니다.
        </li>
        <li style="margin: 5px 0">
          ② 회사가 해당 재화 등의 동일성 여부 및 하자·파손 여부 등을 발견한 경우 선량한 관리자의 주의로써 해외사업자에게 반품, 교환, 환불 요구 등의 조치를 취해야 할 의무가 있습니다.
        </li>
        <li style="margin: 5px 0">
          ③ 회사는 검수의 하자로 인해 이용자가 입은 손해를 배상해야 합니다. 다만, 회사가 제공하는 검수 범위를 벗어난 하자 및 재화 등의 성능·기능상의 하자에 대하여는 손해배상책임을 지지 않습니다.
        </li>
      </ol>
    </li>
    <li style="margin: 5px 0">
      <h2 style="line-height: 150%; margin: 30px 0;">제8조(재포장 및 추가포장)</h2>
      <ol style="line-height: 150%; margin: 5px 0;">
        <li style="margin: 5px 0">
          ① 회사는 제7조에 따라 운송물의 검수 시에 이용자의 동의를 얻어 해당 재화 등을 재포장할 수 있습니다.
        </li>
        <li style="margin: 5px 0">
          ② 회사는 포장이 운송에 적합하지 아니한 때에는 이용자의 동의를 얻어 운송 중 발생될 수 있는 충격의 정도를 고려하여 추가 포장을 할 수 있습니다. 이 과정에서 추가적인 포장비용이 발생할 경우 회사는 이용자에게 추가요금을 청구할 수 있습니다.
        </li>
        <li style="margin: 5px 0">
          ③ 제1항과 2항의 경우, 회사는 이용자에게 재포장으로 인해 해외사업자에 대한 반품 및 환급 요구가 제한될 가능성이 있음을 통지하여야 합니다.
        </li>
        <li style="margin: 5px 0">
          ④ 이용자가 제2항의 추가포장에 동의하지 아니하는 경우에는 포장 부적합 또는 포장 불충분으로 인하여 발생한 손해에 대해서는 회사는 책임을 지지 않습니다. 다만, 회사의 고의 또는 중과실이 있는 경우에는 그러하지 아니합니다.
        </li>
      </ol>
    </li>
    <li style="margin: 5px 0">
      <h2 style="line-height: 150%; margin: 30px 0;">제9조(통관)</h2>
      <li style="margin: 5px 0">
        ① 회사는 수입요건을 구비하여 회사가 정한 운송 및 통관 업무 위탁사를 통하여 통관절차를 수행합니다. 이 때 발생하는 관세, 부가세 및 기타세금 (이하 “관·부가세 등”)은 이용자 또는 수하인이 부담합니다. 이용자가 관·부가세 등을 납부하지 아니하면 회사는 해당 재화 등을 배송하지 않습니다.
      </li>
      <li style="margin: 5px 0">
        ② 회사는 수출입국가의 관세법 등 관련법령을 준수하고, 불법재화 등을 취급하지 않으며, 분할배송 및 가격허위 신고 등 이용자의 불법행위 요청에는 협조하지 않습니다.
      </li>
    </li>
    <li style="margin: 5px 0">
      <h2 style="line-height: 150%; margin: 30px 0;">제10조(긴급조치)</h2>
      <ol style="line-height: 150%; margin: 5px 0;">
        <li style="margin: 5px 0">
          ① 회사는 재화 등이 수출입국가의 관세규정에 따라 통관이 가능한지 여부에 대해서는 보증하지 않습니다.
        </li>
        <li style="margin: 5px 0">
          ② 회사는 재화 등에 관하여 이용자의 책임 있는 사유로 인하여 관할관청 등의 관련법령에 근거한 적법한 인도 요구가 있는 경우 해당 재화 등을 관할 기관에 인도합니다. 이 경우 회사는 지체 없이 이를 이용자에게 통지합니다.
        </li>
        <li style="margin: 5px 0">
          ③ 전항의 조치로 인하여 이용자가 손해를 입었다고 할지라도 해당 손해에 대해서 회사는 책임을 지지 않으며, 이 경우에도 이용자의 해당 재화 등에 관한 서비스 이용 요금 및 관련 비용 등의 지급의무는 존속됩니다.
        </li>
        <li style="margin: 5px 0">
          ④ 제1항의 관할관청 등이 재화 등을 반환한 경우, 회사는 지체 없이 구매대행계약에 따른 채무를 계속해서 이행해야 합니다.
        </li>
      </ol>
    </li>
    <li style="margin: 5px 0">
      <h2 style="line-height: 150%; margin: 30px 0;">제11조(청약철회 및 환급기준)</h2>
      <ol style="line-height: 150%; margin: 5px 0;">
        <li style="margin: 5px 0">
          ① 이용자가 구매대행신청을 한 후 회사가 해외사업자와 구매대행을 신청받은 재화 등의 매매계약을 체결하기 전, 이용자가 구매대행계약의 청약철회 등을 한 경우에는, 회사는 이용자가 기납부한 구매대행 비용의 전액을 환급하여야 합니다.
        </li>
        <li style="margin: 5px 0">
          ② 회사가 해외사업자와 구매대행을 신청 받은 재화 등의 매매계약을 체결한 이후에는 이용자는 구매대행계약의 청약철회 등을 할 수 없습니다. 이 경우, 회사는 이용자에게 해당 매매계약이 체결된 일시를 증빙하는 자료를 제시하여야 합니다.
        </li>
        <li style="margin: 5px 0">
          ③ 제2항의 경우에 이용자는 회사에 구매대행 수수료의 환급을 청구하지 못합니다. 다만, 이용자가 회사에 청약철회 등의 의사를 밝힌 경우로서 해외사업자가 반품 및 환불에 동의하는 경우에 한하여 회사는 이용자의 비용 부담으로 해당 재화 등을 해외사업자에게 반품하고 해외사업자가 환불한 금액을 이용자에게 환급하여야 합니다. 이 경우 회사는 재화 등의 반품에 필요한 비용의 증빙자료를 제시하여야 합니다.
        </li>
        <li style="margin: 5px 0">
          ④ 제2항의 경우, 해외사업자가 해당 재화 등의 반품 및 환불에 동의하지 아니하면, 회사는 이용자에게 1개월 이상의 기간을 정하여 그 기간 내에 해당 재화 등의 처분에 관한 지시를 최고하여야 합니다.
        </li>
        <li style="margin: 5px 0">
          ⑤ 회사는 사전에 구매대행계약의 청약철회 등이 제한되는 경우를 이용자가 쉽게 알 수 있는 곳에 표시하거나 시용 상품을 제공하는 등의 조치를 하여야 하며, 이와 같은 조치를 취하지 않았다면 이용자의 청약철회 등은 제한되지 않습니다.
        </li>
      </ol>
    </li>
    <li style="margin: 5px 0">
      <h2 style="line-height: 150%; margin: 30px 0;">제12조(손해배상)</h2>
      <li style="margin: 5px 0">
        ① 회사가 해외사업자로부터 구매대행을 신청 받은 재화 등을 인도받은 후부터 이용자가 지정한 국내 수령 장소까지의 운송구간에서 해당 재화 등에 분실, 파손 등이 발생하였을 경우, 회사는 자기 또는 사용인 기타 운송을 위하여 사용한 자가 재화 등의 수령, 인도, 보관 기타 운송에 관하여 주의를 게을리 하지 아니하였음을 증명하지 아니하면, 분실, 파손 등으로 이용자가 입은 손해를 이용자가 지급한 금액을 기준으로 산정하여 배상하여야 합니다. 다만 운송물의 분실, 파손 등이 회사의 고의 또는 중과실로 인한 경우에는 회사는 모든 손해를 배상하여야 합니다.
      </li>
      <li style="margin: 5px 0">
        ② 이용자가 부정확한 정보를 기입하여 손해가 발생한 경우, 회사의 고의 또는 중과실로 인한 경우를 제외하고 배상책임을 지지 아니합니다.
      </li>
      <li style="margin: 5px 0">
        ③ 회사가 제공하는 검수 범위 외에 재화 등에 성능·기능상의 하자가 있는 경우, 회사는 선량한 관리자의 주의로써 해외사업자에게 반품, 교환, 환불 요구 등의 조치를 취해야 할 의무가 있습니다.
      </li>
    </li>
    <li style="margin: 5px 0">
      <h2 style="line-height: 150%; margin: 30px 0;">제13조(책임의 특별소멸사유와 시효)</h2>
      <ol style="line-height: 150%; margin: 5px 0;">
        <li style="margin: 5px 0">      
          ① 운송물의 누락 또는 파손에 대한 회사의 손해배상책임은 이용자가 운송물을 수령한 날로부터 10일 이내에 그 누락 또는 파손에 대한 사실을 회사에 통지하지 아니하면 소멸합니다.
        </li>
        <li style="margin: 5px 0">
          ② 회사가 제1항에 따라 손해배상책임을 부담하는 경우에도 이러한 책임은 이용자가 운송물을 수령한 날로부터 1년이 경과하면 소멸합니다. 다만, 운송물이 분실된 경우에는 이용자가 회사의 분실 사실 통지를 수령한 날로부터 기산합니다.
        </li>
        <li style="margin: 5px 0">
          ③ 제1항과 제2항의 규정에도 불구하고 회사 또는 그 사용인이 운송물의 누락 또는 파손의 사실을 알면서 이를 숨기고 운송물을 인도한 경우에 회사의 손해배상책임은 이용자 또는 배송대행신청서상 수령인이 운송물을 수령한 날로부터 5년간 존속합니다.
        </li>
      </ol>
    </li>
    <li style="margin: 5px 0">
      <h2 style="line-height: 150%; margin: 30px 0;">제14조(분쟁해결)</h2>
      <ol style="line-height: 150%; margin: 5px 0;">
        <li style="margin: 5px 0">
          ① 회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치․운영합니다.
        </li>
        <li style="margin: 5px 0">
          ② 회사는 이용자로부터 제출되는 불만사항 및 의견을 다른 사안에 우선하여 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 지체 없이 통지하여야 합니다.
        </li>
        <li style="margin: 5px 0">
          ③ 회사와 대한민국 국민 또는 대한민국에 사무소를 가지는 이용자 간에 발생한 분쟁과 관련하여 이용자의 피해구제신청이 있는 경우에는 공정거래위원회 또는 시·도지사가 의뢰하는 분쟁조정기관의 조정에 따를 수 있습니다.
        </li>
      </ol>
    </li>
    <li style="margin: 5px 0">
      <h2 style="line-height: 150%; margin: 30px 0;">제15조(관할법원 및 준거법)</h2>
      <ol style="line-height: 150%; margin: 5px 0;">
        <li style="margin: 5px 0">
          ① 회사와 대한민국 국민 또는 대한민국에 사무소를 가지는 이용자 간에 발생한 소송은 제소 당시의 이용자의 주소에 의하고, 주소가 없는 경우에는 거소를 관할하는 지방법원의 전속관할로 합니다. 다만, 제소 당시 이용자의 주소 또는 거소가 분명하지 않거나 외국 거주자의 경우에는 민사소송법상의 관할법원에 제기합니다.
        </li>
        <li style="margin: 5px 0">
          ② 회사와 대한민국 국민 또는 대한민국에 사무소를 가지는 이용자 간에 발생한 소송의 준거법은 대한민국법으로 합니다.
        </li>
      </ol>
    </li>
    <li style="margin: 5px 0">
      <h2 style="line-height: 150%; margin: 30px 0;">부칙</h2>
      <ol style="line-height: 150%; margin: 5px 0;">
        <li style="margin: 5px 0">
          이 약관은 2019년 1월 23일부터 적용됩니다.
        </li>
        <li style="margin: 5px 0">
          이 약관은 2020년 1월 2일 개정됐습니다.
        </li>
      </ol>
    </li>
  </ol>`;
const privateInfoPolicy = `
  <h1 style="line-height: 150%; margin: 10px 0;">개인정보취급방침</h1>

  <article style="line-height: 200%; margin: 30px 0;">
    (주)그린데이즈는 이용자들의 개인정보보호를 매우 중요시하며, 이용자가 회사의 서비스를
    이용함과 동시에 온라인상에서 회사에 제공한 개인정보가 보호 받을 수 있도록 최선을 다하고 있습니다.
    이에 (주)그린데이즈는 통신비밀보호법, 전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에
    관한 법률 등 정보통신서비스제공자가 준수하여야 할 관련 법규상의 개인정보보호 규정 및
    정보통신부가 제정한 개인정보보호지침을 준수하고 있습니다. (주)그린데이즈는 개인정보 처리방침을 통하여
    이용자들이 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해
    어떠한 조치가 취해지고 있는지 알려 드립니다.
  </article>

  <h2 style="line-height: 150%; margin: 30px 0;">
    (주)그린데이즈는 개인정보 처리방침을 홈페이지 첫 화면에 공개함으로써 이용자들이 언제나 용이하게 보실
    수 있도록 조치하고 있습니다.
  </h2>

  <article style="line-height: 200%; margin: 5px 0;">
    회사의 개인정보 처리방침은 정부의 법률 및 지침 변경이나 회사의 내부 방침 변경 등으로 인하여
    수시로 변경될 수 있고, 이에 따른 개인정보 처리방침의 지속적인 개선을 위하여 필요한 절차를
    정하고 있습니다. 그리고 개인정보 처리방침을 개정하는 경우나 개인정보 처리방침 변경될 경우
    쇼핑몰의 첫페이지의 개인정보처리방침을 통해 고지하고 있습니다. 이용자들께서는 사이트 방문 시
    수시로 확인하시기 바랍니다.
  </article>

  <h2 style="line-height: 150%; margin: 30px 0;">(주)그린데이즈는 개인정보 처리방침은 다음과 같은 내용을 담고 있습니다.</h2>

  <ol style="line-height: 150%; margin: 10px 0; list-style-ecima 0l">
    <li style="margin: 5px 0; text-indent: 20px">개인정보 수집에 대한동의</li>
    <li style="margin: 5px 0; text-indent: 20px">개인정보의 수집목적 및 이용목적</li>
    <li style="margin: 5px 0; text-indent: 20px">수집하는 개인정보 항목 및 수집방법</li>
    <li style="margin: 5px 0; text-indent: 20px">수집하는 개인정보의 보유 및 이용기간</li>
    <li style="margin: 5px 0; text-indent: 20px">수집한 개인정보의 공유 및 제공</li>
    <li style="margin: 5px 0; text-indent: 20px">이용자 자신의 개인정보 관리(열람,정정,삭제 등)에 관한 사항</li>
    <li style="margin: 5px 0; text-indent: 20px">쿠키(Cookie)의 운용 및 거부</li>
    <li style="margin: 5px 0; text-indent: 20px">개인정보의 위탁처리</li>
    <li style="margin: 5px 0; text-indent: 20px">개인정보관련 의견수렴 및 불만처리에 관한 사항</li>
    <li style="margin: 5px 0; text-indent: 20px">개인정보 관리책임자 및 담당자의 소속-성명 및 연락처</li>
    <li style="margin: 5px 0; text-indent: 20px">아동의 개인정보보호</li>
    <li style="margin: 5px 0; text-indent: 20px">고지의 의무</li>
  </ol>

  <ol style="line-height: 150%; margin: 5px 0;">
    <li style="margin: 5px 0">
      <h3 style="line-height: 200%; margin: 30px 0">1. 개인정보 수집에 대한 동의</h3>
      <article style="line-height: 200%; margin: 5px 0;">
        (주)그린데이즈는 이용자들이 회사의 개인정보 처리방침 또는 이용약관의 내용에 대하여 「동의」버튼 또는
        「취소」버튼을 클릭할 수 있는 절차를 마련하여, 「동의」버튼을 클릭하면 개인정보 수집에 대해
        동의한 것으로 봅니다.
      </article>
    </li>
    <li style="margin: 5px 0">
      <h3 style="line-height: 200%; margin: 30px 0">2. 개인정보의 수집목적 및 이용목적</h3>
      <article style="line-height: 200%; margin: 5px 0;">
        "개인정보"라 함은 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 성명등의 사항에 의하여
        당해 개인을 식별할 수 있는 정보(당해 정보만으로는 특정 개인을 식별할 수 없더라도 다른 정보와
        용이하게 결합하여 식별할 수 있는 것을 포함)를 말합니다.
      </article>
      <article style="line-height: 200%; margin: 5px 0;">
        대부분의 서비스는 별도의 사용자 등록이 없이 언제든지 사용할 수 있습니다.
        그러나 (주)그린데이즈는 멤버십서비스를 통하여 이용자들에게 맞춤식 서비스를 비롯한 보다 더 향상된 양질의
        서비스를 제공하기 위하여 이용자 개인의 정보를 수집하고 있습니다.
      </article>
      <article style="line-height: 200%; margin: 5px 0;">
        (주)그린데이즈는 이용자의 사전 동의 없이는 이용자의 개인 정보를 공개하지 않으며, 수집된 정보는 아래와
        같이 이용하고 있습니다.
      </article>
      <article style="line-height: 200%; margin: 5px 0;">
        <h4>첫째, 이용자들이 제공한 개인정보를 바탕으로 보다 더 유용한 서비스를 개발할 수 있습니다.</h4>
        <p>
        (주)그린데이즈는 신규 서비스개발이나 컨텐츠의 확충 시에 기존 이용자들이 회사에 제공한 개인정보를
        바탕으로 개발해야 할 서비스의 우선 순위를 보다 더 효율적으로 정하고, (주)그린데이즈는 이용자들이 필요로
        할 컨텐츠를 합리적으로 선택하여 제공할 수 있습니다.
        </p>
      </article>
      <article style="line-height: 200%; margin: 5px 0;">
        <h4>둘째, 수집하는 개인정보 항목과 수집 및 이용목적은 다음과 같습니다.</h4>  
        <ul style="margin: 10px 0">
          <li style="margin: 5px 0"> - 성명 , 아이디, 비밀번호 : 멤버십 서비스 이용에 따른 본인 확인 절차에 이용</li>
          <li style="margin: 5px 0"> - 이메일주소, 전화번호 : 고지사항 전달, 불만처리 등을 위한 원활한 의사소통 경로의 확보, 새로운 서비스 및 신상품이나 이벤트 정보 등의 안내</li>
          <li style="margin: 5px 0"> - 은행계좌정보, 신용카드정보 : 서비스 및 부가 서비스 이용에 대한 요금 결제</li>
          <li style="margin: 5px 0"> - 주소, 전화번호 : 청구서, 물품배송시 정확한 배송지의 확보</li>
          <li style="margin: 5px 0"> - 기타 선택항목 : 개인맞춤 서비스를 제공하기 위한 자료</li>
          <li style="margin: 5px 0"> - IP Address : 불량 멤버의 부정 이용 방지와 비인가 사용 방지</li>
          <li style="margin: 5px 0"> - 14세미만 가입자의 경우 법정대리인의 정보 : 만14세 미만 아동 개인정보 수집 시 법정 대리인 동의여부 확인</li>
        </ul>
      </article>
      <article style="line-height: 200%; margin: 5px 0;">
        기타 위 수집된 정보를 이용하여 서비스 제공에 관한 계약 이행 및 요금 정산, 멤버관리, 마케팅 및 광고에 활용하고 있습니다.
      </article>
    </li>
    <li style="margin: 5px 0">
      <h3 style="line-height: 200%; margin: 30px 0">3. 수집하는 개인정보 항목 및 수집방법</h3>
      <article style="line-height: 200%; margin: 5px 0;">
        (주)그린데이즈는 이용자들이 멤버십 서비스를 이용하기 위해 멤버로 가입하실 때 서비스 제공을 위한 필수적인
        정보들을 온라인상에서 입력 받고 있습니다. 멤버십 가입 시에 받는 필수적인 정보는 이름, 이메일 주소
        등입니다. 또한 양질의 서비스 제공을 위하여 이용자들이 선택적으로 입력할 수 있는 사항으로서
        전화번호 등을 입력 받고 있습니다.
      </article>
      <article style="line-height: 200%; margin: 5px 0;">
        또한 쇼핑몰 내에서의 설문조사나 이벤트 행사 시 통계분석이나 경품제공 등을 위해 선별적으로
        개인정보 입력을 요청할 수 있습니다. 그러나, 이용자의 기본적 인권 침해의 우려가 있는 민감한
        개인정보(인종 및 민족, 사상 및 신조, 출신지 및 본적지, 정치적 성향 및 범죄기록, 건강상태 및
        성생활 등)는 수집하지 않으며 부득이하게 수집해야 할 경우 이용자들의 사전동의를 반드시 구할것입니다.
      </article>
      <article style="line-height: 200%; margin: 5px 0;">
        그리고, 어떤 경우에라도 입력하신 정보를 이용자들에게 사전에 밝힌 목적 이외에 다른 목적으로는
        사용하지 않으며 외부로 유출하지 않습니다.
      </article>
    </li>
    <li style="margin: 5px 0">
      <h3 style="line-height: 200%; margin: 30px 0">4. 수집하는 개인정보의 보유 및 이용기간</h3>
      <article style="line-height: 200%; margin: 5px 0;">
        이용자가 쇼핑몰 멤버로서 회사에 제공하는 서비스를 이용하는 동안 (주)그린데이즈는 이용자들의 개인정보를
        계속적으로 보유하며 서비스 제공 등을 위해 이용합니다. 다만, 아래의 "6. 이용자 자신의 개인정보
        관리(열람,정정,삭제 등)에 관한 사항" 에서 설명한 절차와 방법에 따라 멤버 본인이 직접
        삭제하거나 수정한 정보, 가입해지를 요청한 경우에는 재생할 수 없는 방법에 의하여 디스크에서
        완전히 삭제하며 추후 열람이나 이용이 불가능한 상태로 처리됩니다.
      </article>
      <article style="line-height: 200%; margin: 5px 0;">
        그리고 "3. 수집하는 개인정보 항목 및 수집방법"에서와 같이 일시적인 목적 (설문조사, 이벤트,
        본인확인 등)으로 입력 받은 개인정보는 그 목적이 달성된 이후에는 동일한 방법으로 사후 재생이      
        불가능한 상태로 처리됩니다.
      </article>
      <article style="line-height: 200%">     margin: 5px 0;  
        귀하의 개인정보는 다음과 같이 개인정보의 수집목적 또는 제공받은 목적이 달성되면 파기하는 것을
        원칙으로 합니다. 그리고 상법, 전자상거래등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여
        보존할 필요가 있는 경우 (주)그린데이즈는 관계법령에서 정한 일정한 기간 동안 멤버정보를 보관합니다.
        이 경우 (주)그린데이즈는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다.
      </article>
      <ul style="margin: 10px 0">
        <li style="margin: 5px 0"> - 계약 또는 청약철회 등에 관한 기록 : 5년</li>
        <li style="margin: 5px 0"> - 대금결제 및 재화 등의 공급에 관한 기록 : 5년</li>
        <li style="margin: 5px 0"> - 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년</li>
      </ul>
      <article style="line-height: 200%; margin: 5px 0;">
      (주)그린데이즈는 귀중한 멤버의 개인정보를 안전하게 처리하며, 유출의 방지를 위하여 다음과 같은 방법을 통하여 개인정보를 파기합니다.
      </article>
      <ul style="margin: 10px 0">
        <li style="margin: 5px 0">종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</li>
        <li style="margin: 5px 0">전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다</li>
      </ul>
    </li>
    <li style="margin: 5px 0">
      <h3 style="line-height: 200%; margin: 30px 0">5. 수집한 개인정보의 공유 및 제공</h3>
      <article style="line-height: 200%; margin: 5px 0;">
        (주)그린데이즈는 이용자들의 개인정보를 "2. 개인정보의 수집목적 및 이용목적"에서 고지한 범위 내에서
        사용하며, 이용자의 사전 동의 없이는 동 범위를 초과하여 이용하거나 원칙적으로 이용자의
        개인정보를 외부에 공개하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
      </article>
      <ul style="margin: 10px 0">
        <li style="margin: 5px 0">
          - 이용자들이 사전에 공개에 동의한 경우
        </li>
        <li style="margin: 5px 0">
          - 서비스 제공에 따른 요금정산을 위하여 필요한 경우
        </li>
        <li style="margin: 5px 0">
          - 홈페이지에 게시한 서비스 이용 약관 및 기타 멤버 서비스 등의 이용약관 또는 운영원칙을 위반한 경우
        </li>
        <li style="margin: 5px 0">
          - 자사 서비스를 이용하여 타인에게 정신적, 물질적 피해를 줌으로써 그에 대한 법적인 조치를 취하기 위하여 개인정보를 공개해야 한다고 판단되는 충분한 근거가 있는 경우
        </li>
        <li style="margin: 5px 0">
          - 기타 법에 의해 요구된다고 선의로 판단되는 경우 (ex. 관련법에 의거 적법한 절차에 의한 정부/수사기관의 요청이 있는 경우 등)
        </li>
        <li style="margin: 5px 0">
          - 통계작성, 학술연구나 시장조사를 위하여 특정개인을 식별할 수 없는 형태로 광고주, 협력업체나 연구단체 등에 제공하는 경우
        </li>
      </ul>
    </li>
    <li style="margin: 5px 0">
      <h3 style="line-height: 200%; margin: 30px 0">6. 이용자 자신의 개인정보 관리(열람,정정,삭제 등)에 관한 사항</h3>
      <article style="line-height: 200%; margin: 5px 0;">
        멤버가 원하실 경우 언제라도 당사에서 개인정보를 열람하실 수 있으며 보관된 필수 정보를
        수정하실 수 있습니다. 또한 멤버십 가입 시 요구된 필수 정보 외의 추가 정보는 언제나 열람,
        수정, 삭제할 수 있습니다. 멤버의 개인정보 변경 및 삭제와 멤버탈퇴는 당사의 고객센터에서
        로그인(Login) 후 이용하실 수 있습니다.
      </article>
    </li>
    <li style="margin: 5px 0">
      <h3 style="line-height: 200%; margin: 30px 0">7. 쿠키(Cookie)의 운용 및 거부</h3>
      <ul style="margin: 10px 0">
        <li style="margin: 5px 0">
          <h4>가. 쿠키의 사용 목적</h4>
          <ol style="line-height: 150%; margin: 5px 0;">
            <li style="margin: 5px 0">
              ① 회사는 개인 맞춤 서비스를 제공하기 위해서 이용자에 대한 정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다. 쿠키는 웹사이트 서버가 이용자의 브라우저에게 전송하는 소량의 정보로서 이용자 컴퓨터의 하드디스크에 저장됩니다.
            </li>
            <li style="margin: 5px 0">
              ② 회사는 쿠키의 사용을 통해서만 가능한 특정된 맞춤형 서비스를 제공할 수 있습니다.
            </li>
            <li style="margin: 5px 0">
              ③ 회사는 멤버를 식별하고 멤버의 로그인 상태를 유지하기 위해 쿠키를 사용할 수 있습니다.
            </li>
          </ol>
        </li>
        <li style="margin: 5px 0">
          <h4>나. 쿠키의 설치/운용 및 거부</h4>
          <ol style="line-height: 150%; margin: 5px 0;">
            <li style="margin: 5px 0">
              ① 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 이용자는 웹브라우저에서 옵션을 조정함으로써 모든 쿠키를 허용/거부하거나, 쿠키가 저장될 때마다 확인을 거치도록 할 수 있습니다.
              <ul style="margin: 10px 0">
                <li style="margin: 5px 0">
                  - 쿠키 설치 허용 여부를 지정하는 방법(Internet Explorer의 경우)은 다음과 같습니다.
                </li>
                <li style="margin: 5px 0">
                  - [도구] 메뉴에서 [인터넷 옵션]을 선택합니다.
                </li>
                <li style="margin: 5px 0">
                  - [개인정보 탭]을 클릭합니다.
                </li>
                <li style="margin: 5px 0">
                  - [개인정보처리 수준]을 설정하시면 됩니다.
                </li>
              </ul>
            </li>
            <li style="margin: 5px 0">
              ② 쿠키의 저장을 거부할 경우에는 개인 맞춤서비스 등 회사가 제공하는 일부 서비스는 이용이 어려울 수 있습니다.
            </li>
          </ol>
        </li>
      </ul>
    </li>
    <li style="margin: 5px 0">
      <h3 style="line-height: 200%; margin: 30px 0">8. 개인정보의 위탁처리</h3>
      <article style="line-height: 200%; margin: 5px 0;">
        (주)그린데이즈는 서비스 향상을 위해서 귀하의 개인정보를 필요한 경우 동의 등
        법률상의 요건을 구비하여 외부에 수집 · 처리 · 관리 등을 위탁하여 처리할 있으며, 제 3자에
        게 제공할 수 있습니다.
      </article>
      <articl margin: 5px 0;e>
        당사는 개인정보의 처리와 관련하여 아래와 같이 업무를 위탁하고 있으며, 관계 법령에 따라
        위탁계약 시 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하고 있습니다. 또한
        공유하는 정보는 당해 목적을 달성하기 위하여 필요한 최소한의 정보에 국한됩니다.
      </articl>
      <ul style="margin: 10px 0">
        <li style="margin: 5px 0">
          - 위탁 대상자 : [CJ대한통운]
        </li>
        <li style="margin: 5px 0">
          - 위탁업무 내용 : [성명, 주소, 전화번호]
        </li>
        <li style="margin: 5px 0">
          - 위탁 대상자 : [NICE페이먼츠]
        </li>
        <li style="margin: 5px 0">
          - 위탁업무 내용 : [신용카드정보]
        </li>
        <li style="margin: 5px 0">
          - 당사는 귀하에게 편리하고 혜택이 있는 다양한 서비스를 제공하기 위하여 다음의 업체와 제휴합니다. 제공되는 개인정보의 항목은 멤버십 가입 시 당사에 제공한 개인정보 중 아래와 같이 제공됩니다. (현재 제휴한 업체가 없습니다)
          <ul style="margin: 10px 0">
            <li style="margin: 5px 0">
              = 제공대상 : [대상이름]
            </li>
            <li style="margin: 5px 0">
              = 제공 개인정보 항목 : [제공항목]
            </li>
            <li style="margin: 5px 0">
              = 정보 이용목적 : [제공목적]
            </li>
            <li style="margin: 5px 0">
              = 정보 보유 및 이용기간 : [보유기간]
            </li>
          </ul>
        </li>
        <li style="margin: 5px 0">
          - 다만, 아래의 경우에는 예외로 합니다.
          <ul style="margin: 10px 0">
            <li style="margin: 5px 0">
              = 이용자들이 사전에 동의한 경우
            </li>
            <li style="margin: 5px 0">
              = 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우
            </li>
          </ul>
        </li>
        <li style="margin: 5px 0">
          - 개인정보의 처리를 위탁하거나 제공하는 경우에는 수탁자, 수탁범위, 공유 정보의 범위 등에 관한 사항을 서면, 전자우편, 전화 또는 홈페이지를 통해 미리 귀하에게 고지합니다.
        </li>
      </ul>
    </li>
    <li style="margin: 5px 0">
      <h3 style="line-height: 200%; margin: 30px 0">
        9. 개인정보관련 의견수렴 및 불만처리에 관한 사항
      </h3>
      <ariticle>
        당사는 개인정보보호와 관련하여 이용자 여러분들의 의견을 수렴하고 있으며 불만을 처리하기
        위하여 모든 절차와 방법을 마련하고 있습니다. 이용자들은 하단에 명시한 "11. 개인정보
        관리책임자 및 담당자의 소속-성명 및 연락처"항을 참고하여 전화나 메일을 통하여 불만사항을
        신고할 수 있고, (주)그린데이즈는 이용자들의 신고사항에 대하여 신속하고도 충분한 답변을 해 드릴 것입니다.
      </ariticle>
    </li>
    <li style="margin: 5px 0">
      <h3 style="line-height: 200%; margin: 30px 0">10. 개인정보 보호책임자 및 담당자의 소속-성명 및 연락처</h3>
      <article style="line-height: 200%; margin: 5px 0;">
        당사는 귀하가 좋은 정보를 안전하게 이용할 수 있도록 최선을 다하고 있습니다. 개인정보를
        보호하는데 있어 귀하께 고지한 사항들에 반하는 사고가 발생할 경우 개인정보보호책임자가
        책임을 집니다.
      </article>
      <article style="line-height: 200%; margin: 5px 0;">
        이용자 개인정보와 관련한 아이디(ID)의 비밀번호에 대한 보안유지책임은 해당 이용자 자신에게
        있습니다. (주)그린데이즈는 비밀번호에 대해 어떠한 방법으로도 이용자에게 직접적으로 질문하는 경우는
        없으므로 타인에게 비밀번호가 유출되지 않도록 각별히 주의하시기 바랍니다.
        특히 공공장소에서 온라인상에서 접속해 있을 경우에는 더욱 유의하셔야 합니다.
        (주)그린데이즈는 개인정보에 대한 의견수렴 및 불만처리를 담당하는 개인정보 보호책임자 및 담당자를
        지정하고 있고, 연락처는 아래와 같습니다.
      </article>
      <ul style="margin: 10px 0">
        <li style="margin: 5px 0">
          이    름 : 유대상
        </li>
        <li style="margin: 5px 0">
          소속 / 직위 : 대표이사
        </li>
        <li style="margin: 5px 0">
          E-M A I L : eotkd4791@gmail.com
        </li>
        <li style="margin: 5px 0">
          전 화 번 호 : 010-XXXX-XXXX
        </li>
      </ul>
    </li>
    <li style="margin: 5px 0">
      <h3 style="line-height: 200%; margin: 30px 0">11. 아동의 개인정보보호</h3>
      <ul style="margin: 10px 0">
        <li style="margin: 5px 0">
          (주)그린데이즈는 온라인 환경에서 만 14세 미만 어린이의 개인정보를 보호하는 것 역시 중요한 일이라고 생각하고 있습니다.
        </li>
        <li style="margin: 5px 0">
          (주)그린데이즈는 만 14세 미만의 어린이들은 법정대리인의 동의가 없는 한 멤버로 가입할 수 없게 하고 있습니다. 즉, 만 14세 미만의 어린이들은 법정대리인의 동의가 있을 때만 (주)그린데이즈에서 멤버 자격의 서비스를 받을 수 있습니다.
        </li>
      </ul>
    </li>
    <li style="margin: 5px 0">
      <h3 style="line-height: 200%; margin: 30px 0">12. 고지의 의무</h3>
      <article style="line-height: 200%">
        현 개인정보처리방침의 내용은 정부의 정책 또는 보안기술의 변경에 따라 내용의 추가 삭제 및
        수정이 있을 시에는 홈페이지의 '공지사항'을 통해 고지할 것입니다.
      </article>
      <ul style="margin: 10px 0">
        <li style="margin: 5px 0">
          개인정보처리방침 시행일자: 2020-XX-XX
        </li>
        <li style="margin: 5px 0">
          개인정보처리방침 변경일자: 2020-XX-XX
        </li>
      </ul>
    </li>
  </ol>`;

export default {
	logiGuide,
	faqList,
	terms,
	privateInfoPolicy
};
