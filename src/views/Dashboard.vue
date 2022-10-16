<template>
  <div>
    <CRow>
      <CCol :xs="12">
        <CCard class="mb-4">
          <CCardHeader><h2>Welcome Message</h2></CCardHeader>
        </CCard>
      </CCol>
      <CCol :xs="12">
        <CCard class="mb-4">
          <CCardHeader>
            <h3>Projects</h3>
          </CCardHeader>
          <CCardBody>
            <CRow :xs="{ cols: 1, gutter: 4 }" :md="{ cols: 2 }">
              <CCol xs>
                <CCard>
                  <CCardImage orientation="top" :src="VueImg" />
                  <CCardBody>
                    <h4>Project One</h4>
                    <CListGroup flush>
                      <CListGroupItem>Provider</CListGroupItem>
                      <CListGroupItem>Page Link</CListGroupItem>
                      <CListGroupItem>Location</CListGroupItem>
                      <CListGroupItem>Vinatge</CListGroupItem>
                    </CListGroup>
                    <br />
                    <CCardTitle>Description</CCardTitle>
                    <CCardText>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                      <CCardLink href="#">Read more</CCardLink>
                    </CCardText>
                    <div class="d-grid gap-2">
                      <CButton color="primary" size="lg">Vote</CButton>
                    </div>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs>
                <CCard>
                  <CCardImage orientation="top" :src="VueImg" />
                  <CCardBody>
                    <h4>Project Two</h4>
                    <CListGroup flush>
                      <CListGroupItem>Provider</CListGroupItem>
                      <CListGroupItem>Page Link</CListGroupItem>
                      <CListGroupItem>Location</CListGroupItem>
                      <CListGroupItem>Vinatge</CListGroupItem>
                    </CListGroup>
                    <br />
                    <CCardTitle>Description</CCardTitle>
                    <CCardText>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                      <CCardLink href="#">Read more</CCardLink>
                    </CCardText>
                    <div class="d-grid gap-2">
                      <CButton color="primary" size="lg">Vote</CButton>
                    </div>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs>
                <CCard>
                  <CCardImage orientation="top" :src="VueImg" />
                  <CCardBody>
                    <h4>Project Three</h4>
                    <CListGroup flush>
                      <CListGroupItem>Provider</CListGroupItem>
                      <CListGroupItem>Page Link</CListGroupItem>
                      <CListGroupItem>Location</CListGroupItem>
                      <CListGroupItem>Vinatge</CListGroupItem>
                    </CListGroup>
                    <br />
                    <CCardTitle>Description</CCardTitle>
                    <CCardText>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                      <CCardLink href="#">Read more</CCardLink>
                    </CCardText>
                    <div class="d-grid gap-2">
                      <CButton color="primary" size="lg">Vote</CButton>
                    </div>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs>
                <CCard>
                  <CCardImage orientation="top" :src="VueImg" />
                  <CCardBody>
                    <h4>Project Four</h4>
                    <CListGroup flush>
                      <CListGroupItem>Provider</CListGroupItem>
                      <CListGroupItem>Page Link</CListGroupItem>
                      <CListGroupItem>Location</CListGroupItem>
                      <CListGroupItem>Vinatge</CListGroupItem>
                    </CListGroup>
                    <br />
                    <CCardTitle>Description</CCardTitle>
                    <CCardText>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                      <CCardLink href="/projects/project-four"
                        >Read more</CCardLink
                      >
                    </CCardText>
                    <div class="d-grid gap-2">
                      <CButton color="primary" size="lg">Vote</CButton>
                    </div>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <!-- <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader> Traffic &amp; Sales </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol :sm="12" :lg="6">
                <CRow>
                  <CCol :sm="6">
                    <div
                      class="border-start border-start-4 border-start-info py-1 px-3 mb-3"
                    >
                      <div class="text-medium-emphasis small">New Clients</div>
                      <div class="fs-5 fw-semibold">9,123</div>
                    </div>
                  </CCol>
                  <CCol :sm="6">
                    <div
                      class="border-start border-start-4 border-start-danger py-1 px-3 mb-3"
                    >
                      <div class="text-medium-emphasis small">
                        Recurring Clients
                      </div>
                      <div class="fs-5 fw-semibold">22,643</div>
                    </div>
                  </CCol>
                </CRow>
                <hr class="mt-0" />
                <div
                  v-for="item in progressGroupExample1"
                  :key="item.title"
                  class="progress-group mb-4"
                >
                  <div class="progress-group-prepend">
                    <span class="text-medium-emphasis small">{{
                      item.title
                    }}</span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress thin color="info" :value="item.value1" />
                    <CProgress thin color="danger" :value="item.value2" />
                  </div>
                </div>
              </CCol>
              <CCol :sm="12" :lg="6">
                <CRow>
                  <CCol :sm="6">
                    <div
                      class="border-start border-start-4 border-start-warning py-1 px-3 mb-3"
                    >
                      <div class="text-medium-emphasis small">Pageviews</div>
                      <div class="fs-5 fw-semibold">78,623</div>
                    </div>
                  </CCol>
                  <CCol :sm="6">
                    <div
                      class="border-start border-start-4 border-start-success py-1 px-3 mb-3"
                    >
                      <div class="text-medium-emphasis small">Organic</div>
                      <div class="fs-5 fw-semibold">49,123</div>
                    </div>
                  </CCol>
                </CRow>
                <hr class="mt-0" />
                <div
                  v-for="item in progressGroupExample2"
                  :key="item.title"
                  class="progress-group"
                >
                  <div class="progress-group-header">
                    <CIcon :icon="item.icon" class="me-2" size="lg" />
                    <span class="title">{{ item.title }}</span>
                    <span class="ms-auto fw-semibold">{{ item.value }}%</span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress thin :value="item.value" color="warning" />
                  </div>
                </div>

                <div class="mb-5"></div>

                <div
                  v-for="item in progressGroupExample3"
                  :key="item.title"
                  class="progress-group"
                >
                  <div class="progress-group-header">
                    <CIcon :icon="item.icon" class="me-2" size="lg" />
                    <span class="title">Organic Search</span>
                    <span class="ms-auto fw-semibold">
                      {{ item.value }}
                      <span class="text-medium-emphasis small"
                        >({{ item.percent }}%)</span
                      >
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress thin :value="item.percent" color="success" />
                  </div>
                </div>
              </CCol>
            </CRow>
            <br />
            <CTable align="middle" class="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell class="text-center">
                    <CIcon name="cil-people" />
                  </CTableHeaderCell>
                  <CTableHeaderCell>User</CTableHeaderCell>
                  <CTableHeaderCell class="text-center"
                    >Country</CTableHeaderCell
                  >
                  <CTableHeaderCell>Usage</CTableHeaderCell>
                  <CTableHeaderCell class="text-center"
                    >Payment Method</CTableHeaderCell
                  >
                  <CTableHeaderCell>Activity</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow v-for="item in tableExample" :key="item.name">
                  <CTableDataCell>
                    <div>{{ item.user.name }}</div>
                    <div class="small text-medium-emphasis">
                      <span>{{ item.user.new ? 'New' : 'Recurring' }}</span> |
                      {{ item.user.registered }}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell class="text-center">
                    <CIcon
                      size="xl"
                      :name="item.country.flag"
                      :title="item.country.name"
                    />
                  </CTableDataCell>
                  <CTableDataCell>
                    <div class="clearfix">
                      <div class="float-start">
                        <strong>{{ item.usage.value }}%</strong>
                      </div>
                      <div class="float-end">
                        <small class="text-medium-emphasis">
                          {{ item.usage.period }}
                        </small>
                      </div>
                    </div>
                    <CProgress
                      thin
                      :color="item.usage.color"
                      :value="item.usage.value"
                    />
                  </CTableDataCell>
                  <CTableDataCell class="text-center">
                    <CIcon size="xl" :name="item.payment.icon" />
                  </CTableDataCell>
                  <CTableDataCell>
                    <div class="small text-medium-emphasis">Last login</div>
                    <strong>{{ item.activity }}</strong>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow> </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol> -->
    </CRow>
  </div>
</template>

<script>
import VueImg from '@/assets/images/vue.jpg'

export default {
  name: 'Dashboard',
  setup() {
    const progressGroupExample1 = [
      { title: 'Monday', value1: 34, value2: 78 },
      { title: 'Tuesday', value1: 56, value2: 94 },
      { title: 'Wednesday', value1: 12, value2: 67 },
      { title: 'Thursday', value1: 43, value2: 91 },
      { title: 'Friday', value1: 22, value2: 73 },
      { title: 'Saturday', value1: 53, value2: 82 },
      { title: 'Sunday', value1: 9, value2: 69 },
    ]
    const progressGroupExample2 = [
      { title: 'Male', icon: 'cil-user', value: 53 },
      { title: 'Female', icon: 'cil-user-female', value: 43 },
    ]
    const progressGroupExample3 = [
      {
        title: 'Organic Search',
        icon: 'cib-google',
        percent: 56,
        value: '191,235',
      },
      { title: 'Facebook', icon: 'cib-facebook', percent: 15, value: '51,223' },
      { title: 'Twitter', icon: 'cib-twitter', percent: 11, value: '37,564' },
      { title: 'LinkedIn', icon: 'cib-linkedin', percent: 8, value: '27,319' },
    ]
    const tableExample = [
      {
        user: {
          name: 'Yiorgos Avraamu',
          new: true,
          registered: 'Jan 1, 2021',
        },
        country: { name: 'USA', flag: 'cif-us' },
        usage: {
          value: 50,
          period: 'Jun 11, 2021 - Jul 10, 2021',
          color: 'success',
        },
        payment: { name: 'Mastercard', icon: 'cib-cc-mastercard' },
        activity: '10 sec ago',
      },
      {
        user: {
          name: 'Avram Tarasios',
          new: false,
          registered: 'Jan 1, 2021',
        },
        country: { name: 'Brazil', flag: 'cif-br' },
        usage: {
          value: 22,
          period: 'Jun 11, 2021 - Jul 10, 2021',
          color: 'info',
        },
        payment: { name: 'Visa', icon: 'cib-cc-visa' },
        activity: '5 minutes ago',
      },
      {
        user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
        country: { name: 'India', flag: 'cif-in' },
        usage: {
          value: 74,
          period: 'Jun 11, 2021 - Jul 10, 2021',
          color: 'warning',
        },
        payment: { name: 'Stripe', icon: 'cib-cc-stripe' },
        activity: '1 hour ago',
      },
      {
        user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
        country: { name: 'France', flag: 'cif-fr' },
        usage: {
          value: 98,
          period: 'Jun 11, 2021 - Jul 10, 2021',
          color: 'danger',
        },
        payment: { name: 'PayPal', icon: 'cib-cc-paypal' },
        activity: 'Last month',
      },
      {
        user: {
          name: 'Agapetus Tadeáš',
          new: true,
          registered: 'Jan 1, 2021',
        },
        country: { name: 'Spain', flag: 'cif-es' },
        usage: {
          value: 22,
          period: 'Jun 11, 2021 - Jul 10, 2021',
          color: 'primary',
        },
        payment: { name: 'Google Wallet', icon: 'cib-cc-apple-pay' },
        activity: 'Last week',
      },
      {
        user: {
          name: 'Friderik Dávid',
          new: true,
          registered: 'Jan 1, 2021',
        },
        country: { name: 'Poland', flag: 'cif-pl' },
        usage: {
          value: 43,
          period: 'Jun 11, 2021 - Jul 10, 2021',
          color: 'success',
        },
        payment: { name: 'Amex', icon: 'cib-cc-amex' },
        activity: 'Last week',
      },
    ]

    return {
      tableExample,
      progressGroupExample1,
      progressGroupExample2,
      progressGroupExample3,
      VueImg,
    }
  },
}
</script>
