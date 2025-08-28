import remoteController from "./assets/remote_controller.png"
import invoiceProMaker from "./assets/invoice_pro_maker.png"

const appData = [
    {
        id: 1,
        img: remoteController,
        name: "Remote TV : Control Universal",
        title: "RemoteTvControlUniversal",
        shortName: "RTCU",
        desc: "This app is a remote control",
        link: "https://apps.apple.com/kg/app/remote-tv-control-universal/id6740516087",
        mail: "v84583711@gmail.com",
        facebookName: "Control TV",
        facebookLink: "https://www.facebook.com/profile.php?id=61575805511089",
        policies: {
            privacyKey: "privacy.RTCU",
            termsKey: "terms.RTCU"
        },
        descriptions: {
            fulldesc1: "With this application you can control your TV remotely!"
        }
    },
    {
        id: 2,
        img: invoiceProMaker,
        name: "Invoice Pro Maker",
        title: "InvoiceProMaker",
        shortName: "IPM",
        desc: "Invoice: Easy Billing is the ultimate solution for freelancers, small...",
        link: "https://apps.apple.com/kg/app/invoice-pro-maker/id6477842440",
        mail: "vitales.first@gmail.com",
        policies: {
            privacyKey: "privacy.IPM",
            termsKey: "terms.IPM"
        },
        descriptions: {
            fulldesc1: "Invoice: Easy Billing is the ultimate solution for freelancers, small business owners, and anyone in need of a fast and secure way to create and manage invoices on the go. With Invoice, you can effortlessly generate professional invoices, estimates, and quotes in seconds, track payments, and manage your finances with ease. Our intuitive design makes billing straightforward, so you can focus on what you do best.",
            listTitle: "Features:",
            listDesc1: "- Create and send professional invoices and estimates in seconds.",
            listDesc2: "- Customizable templates to reflect your brand.",
            listDesc3: "- Track payments and overdue invoices with real-time notifications.",
            listDesc4: "- Generate detailed financial reports for insights into your business.",
            listDesc5: "- Secure cloud storage for easy access to your documents anytime, anywhere."
        }
    }
]

export default appData;