class BloodBank{
    donors={"Pavi":{name:"Pavi",bloodGroup:"O+ve",age:26,recentlyDonated:true}}

    display(){
        console.log(this.donors);
    }

    add(name,bloodGroup,age,recentlyDonated){
        this.donors[name]={name:name,bloodGroup:bloodGroup,age:age,recentlyDonated:recentlyDonated}
    }
    update(name,recentlyDonated){
        this.donors[name].recentlyDonated=recentlyDonated
    }
    delete(name){
        delete this.donors[name]
    }
}

const dnr=new BloodBank
dnr.display
dnr.add('Arjun','B+ve',24,false)
dnr.update('Pavi',false)
// dnr.delete('Pavi')
console.log(dnr);

