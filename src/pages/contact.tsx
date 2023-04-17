import { PageHeader } from "../components/ui/header";
import { messageFormValidation } from "../components/feature/hooks/form-validations";
import { useForm } from "../components/feature/hooks/useForm";


export default function Contact() {

  //Final submit function
  const messageForm = () => {
    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  }
  //Custom form hook call
  const {handleChange, values,errors,handleSubmit } = useForm(messageForm,{
    // fields for values initial state
    suspectName: "",
    suspectAlias: "",
    message:""
    },{
      // required fields for error state. Ensures that the form is not submitted without the defined objects
      message:""
    }, messageFormValidation);
    // if(values){
    //   alert(values)
    // }
    


  return (
    <main className="container w-full md:w-1/2 mx-auto p-8">
      
      <form  onSubmit={handleSubmit} className="w-full  shadow px-8 py-3 rounded  bg-blue-300">
    
      <PageHeader title="Anonymous Tips" />

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-suspect-name">
        Suspect Name
      </label>
      <input onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-suspect-name" type="text" name="suspectName" placeholder="Suspect Name" />
      <p className="text-gray-600 text-xs italic">(Optional) Insert the suspect name (partial / full name) preferable the full name.</p>
      {
        errors.suspectName ? <p className="text-red-600 text-xs italic">{errors.suspectName}</p> : <p className="text-gray-600 text-xs italic">(Optional) Nickname / alias / aka of suspect.</p>
      }
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        Suspect Alias / Aka
      </label>
      <input onChange={handleChange} name="suspectAlias"  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
      {/* <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" /> */}
      
      {
        errors.suspectAlias ? <p className="text-red-600 text-xs italic">{errors.suspectAlias}</p> : <p className="text-gray-600 text-xs italic">(Optional) Nickname / alias / aka of suspect.</p>
      }
      
      {/* <p className="text-gray-600 text-xs italic">(Optional) Nickname / alias / aka of suspect.</p> */}
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-gender">
        Suspect Gender
      </label>
      <div className="inline-block relative w-full pb-3">
      <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  id="grid-gender">
        <option value="default">Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="unknown">Unknown</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
      </div>
      <p className="text-gray-600 text-xs italic">Select suspect gender.</p>

    </div>
  </div>


  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        Suspect Address
      </label>
      <input onChange={handleChange} name="suspectAddress" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
      {/* <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" /> */}
      <p className="text-gray-600 text-xs italic">(Optional) Insert location where the suspect resides / dwels / was last seen.</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-gender">
      District
      </label>
      <div className="inline-block relative w-full pb-3">
      <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
        <option value="default">Select District</option>
          <option value="anse-la-raye">Anse La Raye</option>
          <option value="bexon">Bexon</option>
          <option value="castries">Castries</option>
          <option value="dennery">Dennery</option>
        </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
      </div>
      <p className="text-gray-600 text-xs italic">Select district where the suspect resides / dwels / was last seen.</p>
    </div>
  </div>


  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
        Message
      </label>
      <textarea onChange={handleChange} name="message" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" cols={50} rows={10} placeholder="Insert Message"/>
      <p className="text-gray-600 text-xs italic">Insert message or information</p>
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-attachments">
        Image Attachments
      </label>
      <input onChange={handleChange} name="attachment" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-attachments" type="file" placeholder="Suspect Name" />
      <p className="text-gray-600 text-xs italic">(Optional) Insert images with the format .jpg /.jpeg.</p>
    </div>
  </div>
  <div className="flex justify-center">
    
  <button type="submit" className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-flex items-center">
    <svg className="fill-current w-4 h-4 mr-2" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
    <span>Submit</span>
  </button>

  </div>
</form>

    </main>
  )
}
